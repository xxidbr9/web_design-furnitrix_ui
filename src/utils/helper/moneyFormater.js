const formater = data =>
    Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(data);

export default formater;
