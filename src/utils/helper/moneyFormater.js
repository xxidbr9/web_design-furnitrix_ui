export default data =>
    Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(data);
