export default (symbol, callback) => {
  const url = `wss://stream.binance.com:9443/stream?streams=${symbol.toLowerCase()}@ticker`
  const conn = new WebSocket(url)

  conn.onopen = () => {
    console.log('CONNECTED')
  }

  conn.onclose = () => {
    console.log('CLOSED')
  }

  conn.onerror = (err) => {
    console.log(`[ERROR]: ${err}`)
    conn.close()
  }

  conn.onmessage = (resp) => {
    callback(JSON.parse(resp.data))
  }
}
