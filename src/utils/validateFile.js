// eslint-disable-next-line import/no-anonymous-default-export
export default (file) => {
    const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/x-icon'];
    return validTypes.indexOf(file.type) !== -1;
}