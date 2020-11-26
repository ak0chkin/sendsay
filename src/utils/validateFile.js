// eslint-disable-next-line import/no-anonymous-default-export
export default (file) => {
    const validTypes = [
        'image/jpeg',
        'image/jpg',
        'image/png',
        'image/gif',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'application/vnd.ms-excel',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'application/pdf',
        'application/zip'
    ];
    return validTypes.indexOf(file.type) !== -1 && file.size <= 5242880;
}