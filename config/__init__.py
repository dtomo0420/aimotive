import csv

def csv_to_print():
    with open(r'beers.csv', encoding='utf-8') as csvf:
        data = csv.DictReader(csvf)

        for row in data:
            print(row)

if __name__ == '__main__':
    csv_to_print()
    pass