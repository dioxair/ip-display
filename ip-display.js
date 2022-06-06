let apiKey = '300da35a27c1b821aef140006f6126a68cccd83d1e65c970c8c95e7f';
$.getJSON('https://api.ipdata.co?api-key=' + apiKey, function(data) {
    let ipdata = JSON.stringify(data, null, 2)
    let ipdataJSON = JSON.parse(ipdata)
    let clientIP = ipdataJSON.ip
    document.getElementById("ip-button").innerText = clientIP
});
