import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { from, to, q } = await request.json()

    // 验证输入参数
    if (!from || !to || !q) {
      return NextResponse.json(
        { error: 'Missing required parameters: from, to, q' },
        { status: 400 }
      )
    }

    // 检查环境变量
    const fanyiKey = process.env.FANYI_KEY
    const fanyiAppid = process.env.FANYI_APPID

    if (!fanyiKey || !fanyiAppid) {
      console.error('Missing translation API credentials')
      return NextResponse.json(
        { error: 'Translation service is not configured' },
        { status: 500 }
      )
    }

    // 调用百度翻译API
    const response = await fetch('https://fanyi-api.baidu.com/ait/api/aiTextTranslate', {
      method: 'POST',
      headers: {
        'Authorization': fanyiKey,
        'User-Agent': 'Apifox/1.0.0 (https://apifox.com)',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        appid: fanyiAppid,
        from: from,
        to: to,
        q: q,
      }),
    })

    const data = await response.json()

    // 处理错误响应
    if (data.error_code) {
      return NextResponse.json(
        {
          error: data.error_msg || 'Translation failed',
          error_code: data.error_code,
        },
        { status: 400 }
      )
    }

    // 返回正常响应
    return NextResponse.json(data)
  } catch (error) {
    console.error('Translation API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
