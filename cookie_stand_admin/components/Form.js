export default function Form(props) {
    return (
        <>
            <form
                onSubmit={props.handler}
                className="flex flex-col p-2 space-y-2 bg-gray-100"
            >
                <label>
                    Location:
                    <input
                        type="text"
                        name="location"
                        className="p-1 border rounded"
                        required
                    />
                </label>
                <label>
                    Min Customers per Hour:
                    <input
                        type="number"
                        name="minCustomersPerHour"
                        className="p-1 border rounded"
                        required
                    />
                </label>
                <label>
                    Max Customers per Hour:
                    <input
                        type="number"
                        name="maxCustomersPerHour"
                        className="p-1 border rounded"
                        required
                    />
                </label>
                <label>
                    Avg Cookies per Sale:
                    <input
                        type="number"
                        step="0.1"
                        name="avgCookiesPerSale"
                        className="p-1 border rounded"
                        required
                    />
                </label>
                <button
                    type="submit"
                    className="p-2 text-white bg-green-500 rounded"
                >
                    Create
                </button>
            </form>
        </>
    )
}
