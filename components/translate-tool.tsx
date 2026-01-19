"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Loader2, Languages, ArrowRightLeft } from "lucide-react"
import { useLocale } from "next-intl"

// 语言列表映射 - 使用各语言的本地名称
const languages = [
  { code: "auto", name: "自动检测 / Auto Detect" },
  { code: "zh", name: "中文" },
  { code: "en", name: "English" },
  { code: "yue", name: "粤语" },
  { code: "wyw", name: "文言文" },
  { code: "jp", name: "日本語" },
  { code: "kor", name: "한국어" },
  { code: "fra", name: "Français" },
  { code: "spa", name: "Español" },
  { code: "th", name: "ไทย" },
  { code: "ara", name: "العربية" },
  { code: "ru", name: "Русский" },
  { code: "pt", name: "Português" },
  { code: "de", name: "Deutsch" },
  { code: "it", name: "Italiano" },
  { code: "el", name: "Ελληνικά" },
  { code: "nl", name: "Nederlands" },
  { code: "pl", name: "Polski" },
  { code: "bul", name: "Български" },
  { code: "est", name: "Eesti" },
  { code: "dan", name: "Dansk" },
  { code: "fin", name: "Suomi" },
  { code: "cs", name: "Čeština" },
  { code: "rom", name: "Română" },
  { code: "slo", name: "Slovenščina" },
  { code: "swe", name: "Svenska" },
  { code: "hu", name: "Magyar" },
  { code: "cht", name: "繁體中文" },
  { code: "vie", name: "Tiếng Việt" },
]

export function TranslateTool() {
  const locale = useLocale()
  const [fromLang, setFromLang] = useState<string>(locale === "zh" ? "zh" : "en")
  const [toLang, setToLang] = useState<string>(locale === "zh" ? "en" : "zh")
  const [inputText, setInputText] = useState<string>("")
  const [result, setResult] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>("")

  const handleTranslate = async () => {
    if (!inputText.trim()) {
      setError("请输入要翻译的文本")
      return
    }

    if (fromLang === toLang) {
      setError("源语言和目标语言不能相同")
      return
    }

    setLoading(true)
    setError("")
    setResult("")

    try {
      const response = await fetch("/api/translate/gemma", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: fromLang,
          to: toLang,
          q: inputText,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "翻译失败")
      }

      if (data.trans_result && data.trans_result.length > 0) {
        setResult(data.trans_result[0].dst)
      } else {
        throw new Error("未获取到翻译结果")
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "翻译失败，请稍后重试")
    } finally {
      setLoading(false)
    }
  }

  const swapLanguages = () => {
    const temp = fromLang
    setFromLang(toLang)
    setToLang(temp)
    // 交换文本
    const tempText = inputText
    setInputText(result)
    setResult(tempText)
  }

  return (
    <Card className="w-full border-primary/30 bg-background/95 backdrop-blur">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 text-xl">
          <Languages className="h-5 w-5 text-primary" />
          翻译工具
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* 语言选择器 */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <div className="flex-1 w-full">
            <Select value={fromLang} onValueChange={setFromLang}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="选择源语言" />
              </SelectTrigger>
              <SelectContent>
                {languages.map((lang) => (
                  <SelectItem key={lang.code} value={lang.code}>
                    {lang.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={swapLanguages}
            className="flex-shrink-0"
            aria-label="交换语言"
          >
            <ArrowRightLeft className="h-4 w-4" />
          </Button>

          <div className="flex-1 w-full">
            <Select value={toLang} onValueChange={setToLang}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="选择目标语言" />
              </SelectTrigger>
              <SelectContent>
                {languages.map((lang) => (
                  <SelectItem key={lang.code} value={lang.code}>
                    {lang.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* 输入框 */}
        <div>
          <Textarea
            placeholder="请输入要翻译的文本..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="min-h-[120px] resize-none"
            disabled={loading}
          />
        </div>

        {/* 翻译按钮 */}
        <Button
          onClick={handleTranslate}
          disabled={loading || !inputText.trim()}
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
        >
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              翻译中...
            </>
          ) : (
            "翻译"
          )}
        </Button>

        {/* 错误提示 */}
        {error && (
          <div className="rounded-md bg-destructive/10 border border-destructive/20 p-3 text-sm text-destructive">
            {error}
          </div>
        )}

        {/* 结果显示 */}
        {result && (
          <div className="rounded-md border border-primary/30 bg-secondary/50 p-4">
            <div className="text-sm text-muted-foreground mb-2">翻译结果：</div>
            <div className="text-base text-foreground whitespace-pre-wrap">{result}</div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
