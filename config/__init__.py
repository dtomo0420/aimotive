import csv
import sqlite3

def csv_to_print():
    with open(r'beers.csv', encoding='utf-8') as csvf:
        data = csv.DictReader(csvf)

        for row in data:
            print(row)

def create_db():
    connection = sqlite3.connect('../beer.db')
    cursor = connection.cursor()
    cursor.execute("CREATE TABLE IF NOT EXISTS BEERS (ABV TEXT, IBU TEXT, ID TEXT, NAME TEXT, STYLE TEXT, BREWERY_ID TEXT, OUNCES TEXT)")

    connection.close()
    csv_to_print()

if __name__ == '__main__':
    create_db()
    pass