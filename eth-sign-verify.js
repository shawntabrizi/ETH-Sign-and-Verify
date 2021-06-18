window.addEventListener('load', async function () {
    if (typeof window.ethereum !== 'undefined') {
        console.log('Web3 Detected! ')
        window.web3 = new Web3(window.ethereum);
        await window.ethereum.request({ method: 'eth_requestAccounts' })
        console.log('ChainID: ', +window.ethereum.chainId)
    } else {
        console.log('No Web3 Detected... please install Metamask')
        document.getElementById("metamask_warning").hidden = false
    }
})


async function sign_message() {
    var message = document.getElementById("message_to_sign").value
    if (document.getElementById("hash_check").checked) {
        message = web3.utils.sha3(message)
    }
    var accounts = await web3.eth.getAccounts()
    var signature = await web3.eth.personal.sign(message, accounts[0])
    document.getElementById("signature_output").innerText = signature
}

var sign_message_button = document.getElementById("sign_message_button")
sign_message_button.addEventListener("click", sign_message);


async function verify_message() {
    var message = document.getElementById("message_to_verify").value
    var signature = document.getElementById("signature").value
    if (document.getElementById("hash_check").checked) {
        message = web3.utils.sha3(message)
    }
    var signing_address = await web3.eth.personal.ecRecover(message, signature)
    document.getElementById("signing_address_output").innerText = signing_address
}

var verify_message_button = document.getElementById("verify_message_button")
verify_message_button.addEventListener("click", verify_message);