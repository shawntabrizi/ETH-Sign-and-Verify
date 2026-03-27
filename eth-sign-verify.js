// Check for wallet on load
window.addEventListener('load', function () {
    if (!window.ethereum) {
        document.getElementById("metamask_warning").hidden = false;
    }
});

async function sign_message() {
    var output = document.getElementById("signature_output");
    try {
        var provider = new ethers.BrowserProvider(window.ethereum);
        var signer = await provider.getSigner();

        var message = document.getElementById("message_to_sign").value;
        if (document.getElementById("hash_check").checked) {
            message = ethers.keccak256(ethers.toUtf8Bytes(message));
        }

        var signature = await signer.signMessage(message);
        output.innerText = signature;
    } catch (error) {
        output.innerText = error.message;
    }
}

function verify_message() {
    var output = document.getElementById("signing_address_output");
    try {
        var message = document.getElementById("message_to_verify").value;
        var signature = document.getElementById("signature").value;

        if (document.getElementById("hash_check").checked) {
            message = ethers.keccak256(ethers.toUtf8Bytes(message));
        }

        var signing_address = ethers.verifyMessage(message, signature);
        output.innerText = signing_address;
    } catch (error) {
        output.innerText = error.message;
    }
}

document.getElementById("sign_message_button").addEventListener("click", sign_message);
document.getElementById("verify_message_button").addEventListener("click", verify_message);
