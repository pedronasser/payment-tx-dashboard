import { DEFAULT_CURRENCY, DEFAULT_LANG } from "../constants"

type TransactionDetailsProps = {
    id: string;
    date: Date;
    description: string;
    amount: string;
    lang?: string;
    currency?: string;
}

function TransactionDetails({id, date, description, amount, lang = DEFAULT_LANG, currency = DEFAULT_CURRENCY}: TransactionDetailsProps): JSX.Element {
    return (
        <div className="flex flex-col">
            <div className="flex flex-row">
                #{id}
            </div>
            <div className="flex flex-row">
                {Intl.DateTimeFormat(lang).format(date)}
            </div>
            <div className="flex flex-row">
                {description ?? 'No description'}
            </div>
            <div className="flex flex-row">
                {Intl.NumberFormat(lang, {style: 'currency', currency}).format(Number(amount))}
            </div>
        </div>
    )
}

TransactionDetails.defaultProps = {
    lang: DEFAULT_LANG,
    currency: DEFAULT_CURRENCY
}

export default TransactionDetails;