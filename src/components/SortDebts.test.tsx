import sortDebts from './SortDebts';
import {DebtData, sortDirection} from './Types';


describe('Testowanie funkcji sortDebts', () => {
    const baseData: DebtData = [
        { Id: 1, Name: "Alice", NIP: "1234567890", Date: new Date("2023-01-01"), Value: 100, Address: "ul. Pierwsza 1", DocumentType: "Faktura", Price: 50, Number: "FV-001" },
        { Id: 2, Name: "Bob", NIP: "9876543210", Date: new Date("2023-02-01"), Value: 200, Address: "ul. Druga 2", DocumentType: "Paragon", Price: 150, Number: "PR-001" },
        { Id: 3, Name: "Charlie", NIP: "4567891230", Date: new Date("2023-03-01"), Value: 50, Address: "ul. Trzecia 3", DocumentType: "Faktura", Price: 100, Number: "FV-002" },
        { Id: 4, Name: "David", NIP: "3216549870", Date: new Date("2023-04-01"), Value: 150, Address: "ul. Czwarta 4", DocumentType: "Faktura", Price: 200, Number: "FV-003" },
      ];
    
    test('Sortowanie rosnąco po nazwie dłużnika', () => {

        const data = [...baseData];
        const sortDirection:sortDirection = "asc";
        const column = "Name";
      
        const sortedData = sortDebts(data, column, sortDirection);
    
        const expectedOutput: DebtData = [
            { Id: 1, Name: "Alice", NIP: "1234567890", Date: new Date("2023-01-01"), Value: 100, Address: "ul. Pierwsza 1", DocumentType: "Faktura", Price: 50, Number: "FV-001" },
            { Id: 2, Name: "Bob", NIP: "9876543210", Date: new Date("2023-02-01"), Value: 200, Address: "ul. Druga 2", DocumentType: "Paragon", Price: 150, Number: "PR-001" },
            { Id: 3, Name: "Charlie", NIP: "4567891230", Date: new Date("2023-03-01"), Value: 50, Address: "ul. Trzecia 3", DocumentType: "Faktura", Price: 100, Number: "FV-002" },
            { Id: 4, Name: "David", NIP: "3216549870", Date: new Date("2023-04-01"), Value: 150, Address: "ul. Czwarta 4", DocumentType: "Faktura", Price: 200, Number: "FV-003" },
        ];
        expect(sortedData).toEqual(expectedOutput);
    });
  
    test('Sortowanie malejąco po nazwie dłużnika', () => {

        const data = [...baseData];
        const sortDirection:sortDirection = "desc";
        const column = "Name";

        const sortedData = sortDebts(data, column, sortDirection);

        const expectedOutput: DebtData = [
            { Id: 4, Name: "David", NIP: "3216549870", Date: new Date("2023-04-01"), Value: 150, Address: "ul. Czwarta 4", DocumentType: "Faktura", Price: 200, Number: "FV-003" },
            { Id: 3, Name: "Charlie", NIP: "4567891230", Date: new Date("2023-03-01"), Value: 50, Address: "ul. Trzecia 3", DocumentType: "Faktura", Price: 100, Number: "FV-002" },
            { Id: 2, Name: "Bob", NIP: "9876543210", Date: new Date("2023-02-01"), Value: 200, Address: "ul. Druga 2", DocumentType: "Paragon", Price: 150, Number: "PR-001" },
            { Id: 1, Name: "Alice", NIP: "1234567890", Date: new Date("2023-01-01"), Value: 100, Address: "ul. Pierwsza 1", DocumentType: "Faktura", Price: 50, Number: "FV-001" },
        ];
        expect(sortedData).toEqual(expectedOutput);

    });
  
    test('Sortowanie rosnąco po NIP', () => {
    
        const data = [...baseData];
        const sortDirection:sortDirection = "asc";
        const column = "NIP";
      
        const sortedData = sortDebts(data, column, sortDirection);
    
        const expectedOutput: DebtData = [
            { Id: 1, Name: "Alice", NIP: "1234567890", Date: new Date("2023-01-01"), Value: 100, Address: "ul. Pierwsza 1", DocumentType: "Faktura", Price: 50, Number: "FV-001" },
            { Id: 4, Name: "David", NIP: "3216549870", Date: new Date("2023-04-01"), Value: 150, Address: "ul. Czwarta 4", DocumentType: "Faktura", Price: 200, Number: "FV-003" },
            { Id: 3, Name: "Charlie", NIP: "4567891230", Date: new Date("2023-03-01"), Value: 50, Address: "ul. Trzecia 3", DocumentType: "Faktura", Price: 100, Number: "FV-002" },
            { Id: 2, Name: "Bob", NIP: "9876543210", Date: new Date("2023-02-01"), Value: 200, Address: "ul. Druga 2", DocumentType: "Paragon", Price: 150, Number: "PR-001" },
        ];
        expect(sortedData).toEqual(expectedOutput);
    });

    test('Sortowanie malejąco po NIP', () => {
    
        const data = [...baseData];
        const sortDirection:sortDirection = "desc";
        const column = "NIP";
      
        const sortedData = sortDebts(data, column, sortDirection);
    
        const expectedOutput: DebtData = [
            { Id: 2, Name: "Bob", NIP: "9876543210", Date: new Date("2023-02-01"), Value: 200, Address: "ul. Druga 2", DocumentType: "Paragon", Price: 150, Number: "PR-001" },
            { Id: 3, Name: "Charlie", NIP: "4567891230", Date: new Date("2023-03-01"), Value: 50, Address: "ul. Trzecia 3", DocumentType: "Faktura", Price: 100, Number: "FV-002" },
            { Id: 4, Name: "David", NIP: "3216549870", Date: new Date("2023-04-01"), Value: 150, Address: "ul. Czwarta 4", DocumentType: "Faktura", Price: 200, Number: "FV-003" },
            { Id: 1, Name: "Alice", NIP: "1234567890", Date: new Date("2023-01-01"), Value: 100, Address: "ul. Pierwsza 1", DocumentType: "Faktura", Price: 50, Number: "FV-001" },
        ];
        expect(sortedData).toEqual(expectedOutput);
    });

    test('Sortowanie rosnąco po kwocie zadłużenia', () => {
    
        const data = [...baseData];
        const sortDirection:sortDirection = "asc";
        const column = "Value";
      
        const sortedData = sortDebts(data, column, sortDirection);
    
        const expectedOutput: DebtData = [
            { Id: 3, Name: "Charlie", NIP: "4567891230", Date: new Date("2023-03-01"), Value: 50, Address: "ul. Trzecia 3", DocumentType: "Faktura", Price: 100, Number: "FV-002" },
            { Id: 1, Name: "Alice", NIP: "1234567890", Date: new Date("2023-01-01"), Value: 100, Address: "ul. Pierwsza 1", DocumentType: "Faktura", Price: 50, Number: "FV-001" },
            { Id: 4, Name: "David", NIP: "3216549870", Date: new Date("2023-04-01"), Value: 150, Address: "ul. Czwarta 4", DocumentType: "Faktura", Price: 200, Number: "FV-003" },
            { Id: 2, Name: "Bob", NIP: "9876543210", Date: new Date("2023-02-01"), Value: 200, Address: "ul. Druga 2", DocumentType: "Paragon", Price: 150, Number: "PR-001" },
        ];
        expect(sortedData).toEqual(expectedOutput);
    });

    test('Sortowanie malejąco po kwocie zadłużenia', () => {
    
        const data = [...baseData];
        const sortDirection:sortDirection = "desc";
        const column = "Value";
      
        const sortedData = sortDebts(data, column, sortDirection);
    
        const expectedOutput: DebtData = [
            { Id: 2, Name: "Bob", NIP: "9876543210", Date: new Date("2023-02-01"), Value: 200, Address: "ul. Druga 2", DocumentType: "Paragon", Price: 150, Number: "PR-001" },
            { Id: 4, Name: "David", NIP: "3216549870", Date: new Date("2023-04-01"), Value: 150, Address: "ul. Czwarta 4", DocumentType: "Faktura", Price: 200, Number: "FV-003" },
            { Id: 1, Name: "Alice", NIP: "1234567890", Date: new Date("2023-01-01"), Value: 100, Address: "ul. Pierwsza 1", DocumentType: "Faktura", Price: 50, Number: "FV-001" },
            { Id: 3, Name: "Charlie", NIP: "4567891230", Date: new Date("2023-03-01"), Value: 50, Address: "ul. Trzecia 3", DocumentType: "Faktura", Price: 100, Number: "FV-002" },
        ];
        expect(sortedData).toEqual(expectedOutput);
    });

    test('Sortowanie rosnąco po dacie', () => {
    
        const data = [...baseData];
        const sortDirection:sortDirection = "asc";
        const column = "Date";
      
        const sortedData = sortDebts(data, column, sortDirection);
    
        const expectedOutput: DebtData = [
            { Id: 1, Name: "Alice", NIP: "1234567890", Date: new Date("2023-01-01"), Value: 100, Address: "ul. Pierwsza 1", DocumentType: "Faktura", Price: 50, Number: "FV-001" },
            { Id: 2, Name: "Bob", NIP: "9876543210", Date: new Date("2023-02-01"), Value: 200, Address: "ul. Druga 2", DocumentType: "Paragon", Price: 150, Number: "PR-001" },
            { Id: 3, Name: "Charlie", NIP: "4567891230", Date: new Date("2023-03-01"), Value: 50, Address: "ul. Trzecia 3", DocumentType: "Faktura", Price: 100, Number: "FV-002" },
            { Id: 4, Name: "David", NIP: "3216549870", Date: new Date("2023-04-01"), Value: 150, Address: "ul. Czwarta 4", DocumentType: "Faktura", Price: 200, Number: "FV-003" },
        ];
        expect(sortedData).toEqual(expectedOutput);
    });

    test('Sortowanie malejąco po dacie', () => {
    
        const data = [...baseData];
        const sortDirection:sortDirection = "desc";
        const column = "Date";
      
        const sortedData = sortDebts(data, column, sortDirection);
    
        const expectedOutput: DebtData = [
            { Id: 4, Name: "David", NIP: "3216549870", Date: new Date("2023-04-01"), Value: 150, Address: "ul. Czwarta 4", DocumentType: "Faktura", Price: 200, Number: "FV-003" },
            { Id: 3, Name: "Charlie", NIP: "4567891230", Date: new Date("2023-03-01"), Value: 50, Address: "ul. Trzecia 3", DocumentType: "Faktura", Price: 100, Number: "FV-002" },
            { Id: 2, Name: "Bob", NIP: "9876543210", Date: new Date("2023-02-01"), Value: 200, Address: "ul. Druga 2", DocumentType: "Paragon", Price: 150, Number: "PR-001" },
            { Id: 1, Name: "Alice", NIP: "1234567890", Date: new Date("2023-01-01"), Value: 100, Address: "ul. Pierwsza 1", DocumentType: "Faktura", Price: 50, Number: "FV-001" },
        ];
        expect(sortedData).toEqual(expectedOutput);
    });

    test('Sortowanie malejąco po nie istniejącej kolumnie', () => {
    
        const data = [...baseData];
        const sortDirection:sortDirection = "desc";
        const column = "Test";
      
        const sortedData = sortDebts(data, column, sortDirection);
    
        const expectedOutput: DebtData = [
            { Id: 1, Name: "Alice", NIP: "1234567890", Date: new Date("2023-01-01"), Value: 100, Address: "ul. Pierwsza 1", DocumentType: "Faktura", Price: 50, Number: "FV-001" },
            { Id: 2, Name: "Bob", NIP: "9876543210", Date: new Date("2023-02-01"), Value: 200, Address: "ul. Druga 2", DocumentType: "Paragon", Price: 150, Number: "PR-001" },
            { Id: 3, Name: "Charlie", NIP: "4567891230", Date: new Date("2023-03-01"), Value: 50, Address: "ul. Trzecia 3", DocumentType: "Faktura", Price: 100, Number: "FV-002" },
            { Id: 4, Name: "David", NIP: "3216549870", Date: new Date("2023-04-01"), Value: 150, Address: "ul. Czwarta 4", DocumentType: "Faktura", Price: 200, Number: "FV-003" },
        ];
        expect(sortedData).toEqual(expectedOutput);
    });

    test('Sortowanie pustej tablicy', () => {
    
        const data: DebtData = [];
        const sortDirection:sortDirection = "desc";
        const column = "Test";
      
        const sortedData = sortDebts(data, column, sortDirection);
    
        const expectedOutput: DebtData = [];
        expect(sortedData).toEqual(expectedOutput);
    });


  });



