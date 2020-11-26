import Sendsay from "sendsay-api";

const sendsay = new Sendsay({apiKey: '19G37aBHzIr26V1NWF5kkqaVBguhD60740UgZmn_jXsLQrNuQkbPr79DPCqCu-5T2lBk5se4482wicksEcxteDx7M'});

export const issueSendTest = (fields) => {
    const requestBody = {
        'action': 'issue.send.test',
        'letter': {
            'subject': fields['subject'],
            'from.name': fields['from.name'],
            'from.email': fields['from.email'],
            'to.name': fields['to.name'],
            'message': {'text': fields['message']},
            'attaches': fields['attaches']
        },
        'sendwhen': 'test',
        'mca': [
            fields['mca']
        ]
    }
    return sendsay.request(requestBody);
}

export const trackGet = (trackId) => {
    const requestBody = {
        'action': 'track.get',
        'id': trackId
    }
    return sendsay.request(requestBody);
}