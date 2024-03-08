export const imageUrlToBase64 = async (url) => {
    const response = await fetch(url);
    const blob = await response.blob();
    return new Promise((onSuccess, onError) => {
        try {
            const reader = new FileReader();
            reader.onload = function () {
                if (typeof (this.result) === 'string') {
                    onSuccess(this.result)
                } else {
                    onSuccess('')
                }
            };
            reader.readAsDataURL(blob);
        } catch (e) {
            onError(e);
        }
    });
};