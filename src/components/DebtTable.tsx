import { useState, useEffect, useRef } from "react";
import { DebtData, sortDirection } from "./Types";
import fetchData from "./FetchData";
import { FetchOptions} from "./FetchData";
import '../styles/debtTable.less';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import sortDebts from "./SortDebts";
import { formatDate } from "./FormatDate";
import "../styles/customSkeleton.less";

interface debtTableProps {
    searchQuery: string;
}



const DebtTable = ({ searchQuery }: debtTableProps) => {
    const headValues = {
        "Name": "DŁUŻNIK",
        "NIP": "NIP",
        "Value": "KWOTA ZADŁUŻENIA",
        "Date": "DATA POWSTANIA ZOBOWIĄZANIA"
    }

    const [data, setData] = useState<DebtData>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const selectedColumn = useRef<string>("Name");
    const sortDirection= useRef<sortDirection>('asc');

    useEffect(() => {
        const getData = async (route: string, fetchOptions?: FetchOptions) => {
            setLoading(true);
            setError(null);
            try {
                let response: DebtData = await fetchData<DebtData>(route, fetchOptions);

                if (response != null) {
                    if (response.length > 10) {
                        response = response.slice(0, 10);
                    }

                    response = response.map(item => ({
                        ...item,
                        Date: new Date(item.Date),
                    }));

                }
                setData(sortDebts(response, selectedColumn.current, sortDirection.current));

            } catch (err) {
                setError((err as Error).message);
            } finally {
                setLoading(false);
            }
        };


        if (searchQuery === '') getData("https://rekrutacja-webhosting-it.krd.pl/api/Recruitment/GetTopDebts");
        else {

            if(searchQuery.length < 3){
                setError("Błąd: Podana fraza powinna zawierać co najmniej 3 znaki.");
                return;
            }

            const fetchOptions: FetchOptions = {
                method: 'POST',
                body: {
                    "Name": searchQuery,
                    "NIP": searchQuery
                }
            };

            getData("https://rekrutacja-webhosting-it.krd.pl/api/Recruitment/GetFilteredDebts", fetchOptions);

        }
    }, [searchQuery]);


    const handleColumnClick = (column: string) => {
        if (selectedColumn.current === column) {
            sortDirection.current = sortDirection.current === 'asc' ? 'desc' : 'asc';
        } else {
            selectedColumn.current = column;
            sortDirection.current = 'asc';
        }

        setData(prevData => sortDebts(prevData, selectedColumn.current, sortDirection.current));
    };

    const renderContent = () => {
        return (
            <div className={`debt_container ${!error ? "debt_table_overflow_control":""}`}>
                {error ? <p className="error">{error}</p>

                    : <table className="debt_table">
                        <thead>
                            <tr className="debt_table__row">
                                {
                                    Object.entries(headValues).map(([key, value]) => (
                                        <th key={key} onClick={() => handleColumnClick(key)} className={`${key}_col debt_table__header  debt_table__cell ${selectedColumn.current === key ? (sortDirection.current === 'asc' ? 'asc' : 'desc') : ''}`}>
                                            {value}{selectedColumn.current === key && (
                                                sortDirection.current === 'asc' ? <FontAwesomeIcon icon={faCaretUp} /> : <FontAwesomeIcon icon={faCaretDown}/>
                                            )}
                                        </th>
                                    ))
                                }
                            </tr>
                        </thead>
                        <tbody>

                            {
                                loading ? Array.from({ length: 3 }).map((_, index) => (
                                    <tr className="debt_table__row" key={index}>
                                        {Object.entries(headValues).map((_, index) => (
                                            <td className="debt_table__data" key={index}>
                                                <div className="custom-skeleton blinking-skeleton debt_table__cell">&nbsp;</div>
                                            </td>
                                        ))}

                                    </tr>
                                ))
                                    : data?.map((item) => (

                                        <tr className="debt_table__row" key={item.Id}>
                                            <td className="debt_table__data debt_table__cell">{item.Name}</td>
                                            <td className="debt_table__data debt_table__cell">{item.NIP}</td>
                                            <td className="debt_table__data debt_table__cell">{item.Value}</td>
                                            <td className="debt_table__data debt_table__cell">{formatDate(item.Date)}</td>
                                        </tr>

                                    ))}
                        </tbody>
                    </table>}
            </div>
        );
    };

    return renderContent();
}

export default DebtTable;