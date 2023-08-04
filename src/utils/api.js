export default async function getData() {
    const res = await fetch('https://restcountries.com/v3.1/all');

    if (!res.ok) {
        throw {
            message: "Failed to fetch The Data",
            statusText: res.statusText,
            status: res.status
        }
    }

    const data = await res.json()
    return data
}

