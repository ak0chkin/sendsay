import Sendsay from "sendsay-api";

const sendsay = new Sendsay({apiKey: '19G37aBHzIr26V1NWF5kkqaVBguhD60740UgZmn_jXsLQrNuQkbPr79DPCqCu-5T2lBk5se4482wicksEcxteDx7M'});

export const issueSendTest = async (fields) => {
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
    const response = await sendsay.request(requestBody);
    return response;
}

export const trackGet = async (trackId) => {
    const requestBody = {
        'action': 'track.get',
        'id': trackId
    }
    const response = await sendsay.request(requestBody);
    if (response.obj['status'] > -1) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        return await trackGet(trackId);
    } else {
        return response;
    }
}