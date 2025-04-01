import fetchData, {FetchOptions} from './FetchData';
import {DebtData} from './Types';


describe('Testowanie funkcji fetchData', () => {

    test('Testowanie żądania GetTopDebts', async () =>{

        try{
            const url ="https://rekrutacja-webhosting-it.krd.pl/api/Recruitment/GetTopDebts";
            const result:DebtData = await fetchData<DebtData>(url);
        

            expect(result).not.toBeNull();
            expect(Array.isArray(result)).toBe(true);
            
            expect(result.length).toEqual(10);
        
            expect(result).toBeInstanceOf(Object);
            
            result.forEach(item=>{
                expect(typeof item.Id).toBe("number");
                expect(typeof item.Name).toBe("string");
                expect(typeof item.NIP).toBe("string");
                expect(typeof item.Date).toBe("string");
                expect(new Date(item.Date)).toBeInstanceOf(Date);
                expect(typeof item.Value).toBe("number");
                expect(typeof item.Address).toBe("string");
                expect(typeof item.Price).toBe("number");
                expect(typeof item.Number).toBe("string");
            })
        }
        catch(error)
        {
            throw new Error(`${(error as Error).message}`);
        }
    


    });

    test('Testowanie żądania GetFilteredDebts dla atrybutu Name', async () =>{
        try{
            const url ="https://rekrutacja-webhosting-it.krd.pl/api/Recruitment/GetFilteredDebts"
            const name = "mazur"
            const fetchOptions: FetchOptions = {
                method: 'POST',
                body: {
                    "Name": name,
                }
            };
            const result:DebtData = await fetchData<DebtData>(url, fetchOptions);

            expect(result.length).toEqual(2);

            result.forEach(item=>{
                expect(item.Name.toLowerCase()).toContain(name.toLowerCase());
                
                expect(typeof item.Id).toBe("number");
                expect(typeof item.Name).toBe("string");
                expect(typeof item.NIP).toBe("string");
                expect(typeof item.Date).toBe("string");
                expect(new Date(item.Date)).toBeInstanceOf(Date);
                expect(typeof item.Value).toBe("number");
                expect(typeof item.Address).toBe("string");
                expect(typeof item.Price).toBe("number");
                expect(typeof item.Number).toBe("string");
            })
        }
        catch(error)
        {
            throw new Error(`${(error as Error).message}`);
        }

    });

    test('Testowanie żądania GetFilteredDebts dla atrybutu NIP', async () =>{
        try{
            const url ="https://rekrutacja-webhosting-it.krd.pl/api/Recruitment/GetFilteredDebts"
            const nip = "301"
            const fetchOptions: FetchOptions = {
                method: 'POST',
                body: {
                    "NIP": nip,
                }
            };
            const result:DebtData = await fetchData<DebtData>(url, fetchOptions);

            expect(result.length).toEqual(1);

            result.forEach(item=>{
                expect(item.NIP.toLowerCase()).toContain(nip.toLowerCase());

                expect(typeof item.Id).toBe("number");
                expect(typeof item.Name).toBe("string");
                expect(typeof item.NIP).toBe("string");
                expect(typeof item.Date).toBe("string");
                expect(new Date(item.Date)).toBeInstanceOf(Date);
                expect(typeof item.Value).toBe("number");
                expect(typeof item.Address).toBe("string");
                expect(typeof item.Price).toBe("number");
                expect(typeof item.Number).toBe("string");
            })
        }
        catch(error)
        {
            throw new Error(`${(error as Error).message}`);
        }        

    });


});



