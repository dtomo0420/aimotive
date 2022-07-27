import csv
import sqlite3


def insert_variable_into_table(row):
    try:
        connection = sqlite3.connect('../beer.db')
        cursor = connection.cursor()

        insert_beer = "INSERT INTO BEERS(abv, ibu, id, name, style, brewery_id, ounces) VALUES (?, ?, ?, ?, ?, ?, ?);"

        data_tuple = (row['abv'], row['ibu'], row['id'], row['name'], row['style'], row['brewery_id'], row['ounces'])
        cursor.execute(insert_beer, data_tuple)
        connection.commit()
        cursor.close()

    except sqlite3.Error as error:
        print("Failed to insert Python variable into sqlite table", error)
    finally:
        if connection:
            connection.close()


def csv_to_db():
    with open(r'beers.csv', encoding='utf-8') as csvf:
        data = csv.DictReader(csvf)

        for row in data:
            insert_variable_into_table(row)


def create_db():
    connection = sqlite3.connect('../beer.db')
    cursor = connection.cursor()
    cursor.execute("CREATE TABLE IF NOT EXISTS "
                   "BEERS (ABV TEXT, IBU TEXT, ID TEXT, NAME TEXT, STYLE TEXT, BREWERY_ID TEXT, OUNCES TEXT)")

    connection.close()
    csv_to_db()


if __name__ == '__main__':
    # create_db()
    pass
