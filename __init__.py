from flask import Flask, render_template, request, url_for, redirect
import sqlite3

app = Flask(__name__)

@app.route("/", methods=['GET', 'POST'])
def index():
    connection = sqlite3.connect('beer.db')
    try:
        data = connection.execute("SELECT * FROM BEERS ORDER BY ID;").fetchall()

        connection.commit()
        connection.close()

        json_data = []
        for i in data:
            json_element = {
                "ABV": i[0],
                "IBU": i[1],
                "ID": i[2],
                "NAME": i[3],
                "STYLE": i[4],
                "BREWERY_ID": i[5],
                "OUNCES": i[6]
            }

            json_data.append(json_element)

        return render_template('index.html', data=json_data, len=len(json_data))
    except sqlite3.Error as error:
        print("Failed to select from table", error)
    finally:
        if connection:
            connection.close()

if __name__ == '__main__':
    app.run(port=4023)