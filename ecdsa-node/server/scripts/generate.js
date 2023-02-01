const secp = require("ethereum-cryptography/secp256k1");
const {keccak256} = require("ethereum-cryptography/keccak");

const {toHex, utf8ToBytes} = require("ethereum-cryptography/utils");

async function signMessage() {

    const privateKey = secp.utils.randomPrivateKey();
    console.log('private key: ', toHex(privateKey));
    const publicKey = secp.getPublicKey(privateKey);
    console.log('publicKey: ', toHex(publicKey));
    // const privateKey = '2c99a16a91457f81d9d8c6803918df11371e6a0a9f61c061e43e7f67099bc517';
    // const publicKey = '04cffec38c1a4df5e2c156d305785d95b567e24d290337a2a3130445b44198b95bd98dc7e5db3f7f6ce125a13eba1a5f641b3becb41e562d6c9f5eb28348e1efc5';
    // const message = 'something';
    // const hashedMessage = keccak256(utf8ToBytes(message));
    // const signature = await secp.sign(hashedMessage, privateKey, {recovered: true});
    // //inside of sig is 2 arrays, 1st array is signed message, 2nd part is the recovery bit
    // // console.log('signature: ' + toHex(signature[0]));
    // const recoveredPublicKey = await secp.recoverPublicKey(hashedMessage, signature[0], signature[1]);
    // if (toHex(recoveredPublicKey) === publicKey) {
    //     //toHex converts deicmal to hexidecimal
    //     console.log('successfully recovered public key: ' + toHex(recoveredPublicKey));
    // }
}

signMessage();


//sign
//recoverPublcd icKey


//private key:  2c99a16a91457f81d9d8c6803918df11371e6a0a9f61c061e43e7f67099bc517
//publicKey:  04cffec38c1a4df5e2c156d305785d95b567e24d290337a2a3130445b44198b95bd98dc7e5db3f7f6ce125a13eba1a5f641b3becb41e562d6c9f5eb28348e1efc5
//signature: 30450221009c9e156726b2c9bac3482b76cf03689f4305aa3ccd1cf8966305e2e99056eb3d022041ec6d09f4681bb4f11076d4e2d443ad04678edb1257b722873c0bae0495b561

//private key:  ad7c9752d9f99699192d711386a6fc29e409059a4aa8d30310e3b3b4d3d019c0
// publicKey:  040ab60209e72944b592b0310ef4b6fad37dd8c911287573b343f84a1c073fbc2de8cd295c20f277b747447812fa3f2ce4ee5d2ac8d7342802ece12c7e7bbe7a4d

//private key:  96bdd5dcc538898d640d6baa5071c4b61f7d946bafda09fb17d947636882ca72
//publicKey:  042be6de4a64a8f6ed6b045cc2855395b57e587ad92f715d1cb1bc3df7dc21a560bd413cc9cd234feb62e11cac811fad61761a27c8a57e4e3ef71c9039b4a1197c

