window.addEventListener('load', function () {
    if (typeof web3 !== 'undefined') {
        console.log('Web3 Detected! ' + web3.currentProvider.constructor.name)
        window.web3 = new Web3(web3.currentProvider);
    } else {
        console.log('No Web3 Detected... please install Metamask')
    }
})


async function sign_message() {
    var message = document.getElementById("message_to_sign").value
    var hash = web3.utils.sha3(message)
    var accounts = await web3.eth.getAccounts()
    var signed_message = await web3.eth.personal.sign(hash, accounts[0])
    document.getElementById("signature_output").innerText = signed_message
}

var sign_message_button = document.getElementById("sign_message_button")
sign_message_button.addEventListener("click", sign_message);


async function verify_message() {
    var message = document.getElementById("message_to_verify").value
    var signature = document.getElementById("signature").value
    var hash = web3.utils.sha3(message)
    var signing_address = await web3.eth.personal.ecRecover(hash, signature)
    document.getElementById("signing_address_output").innerText = signing_address
}

var verify_message_button = document.getElementById("verify_message_button")
verify_message_button.addEventListener("click", verify_message);