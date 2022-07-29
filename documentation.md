# User documentation
In order for the user to be able to display the program, it is necessary to run the __init__.py file in the root directory. The program can then be viewed at the following URL: http://127.0.0.1:4041/

## Usage

### Home
A simple jquery-based game greets the user. The character at the bottom of the game (hereinafter: Tywin) can be moved by pressing the right and left keys. The aim of the game is for Tywin to avoid the beers fired by the other player. If this fails, the caption below reads 'Unfortunately, Tywin is dead.' is announced and the throwing of beers stops.

### Discover
The user can browse the database, 100 items are displayed per page. The text 'Edit' appears next to each item. If the user wants to edit, he can do so by pressing this. 

When editing ID and NAME cannot be modified, but other elements can.

### Search
It is possible for the user to search based on the ID and NAME properties.

### Insert
The user has the option to add new items to the database. It is important to specify all properties in order to maintain the quality of the database.

# Developer documentation

## Database management

Source data processing, database creation, and data integration are done in the config package.

Four functions are responsible for the entire process:

- create_db: creating the database with the appropriate properties.
- csv_to_db: opening and then browsing the csv file. The insert_variable_into_table function is called for each element.
- insert_variable_into_table: the element arriving in the parameter is included in the database. If an sql error occurs, it will be written to the console.
- main function: The entire database management process can be started from here. Basically, if we have created the database and uploaded it, these components of the application are not needed, so they are not called.

## JQUERY game

A simple JQERY game has been created on the home page.

The game starts with the line $(document).ready... . Here I define the playfield (line 14), define attack_src (line 20), provide keyboard handling, and call the init function.

In the init function, I call the function that defines the two actors and assigns them to the playing field. In addition, two interval functions are recorded here, as well as how often I call them. The add_attack function is called every 700 ms, the check every 1 ms.

The essence of the add_attack function is that it derives an element from the attack_src defined in init. Generates a number that we use in animate. This shows where the element should animate horizontally. When the element has reached this position, it is removed. It is important to assign all elements to the attack class.

In the check function, we go through the elements of the attack class. The distance function is used to examine the class members and tywin's distance. If it falls below that threshold, it's game over. It is important that the distance calculation function does not examine the center of the elements, I did not change this, as this way approximately Tywin's head is examined.

For moving Tywin according to the move_tywin function. The element can be moved by pressing the left and right arrows. Paying special attention not to go off the playing field.

## Select items

The select function is responsible for listing. Listing can be done in two ways:

- In case of POST method: then we get here from the search page, so we query the 'name' and 'style' values using request.form.get(). The listing will be done after that. The elements that contain the partial strings included in the request are displayed.
- In other case: all the elements of the database are simply listed.

Finally, the results of both listings are converted into a data file in JSON format. With this and the size of the file, we return to list.html.

If an sql error occurs, it will be written to the console.

## Edit item

The modify_item is responsible for modifying.

In this case, I considered the ID and NAME properties as primary keys, so they cannot be modified.

If an sql error occurs, it will be written to the console.

## Insert item

The select insert_ item is responsible for inserting.

Then we get here from the search page, so we query all the variables using request.form.get(). It is mandatory to specify all variables on the website, thereby ensuring the quality of the database. After successful recording, you will be returned to the home page.

If an sql error occurs, it will be written to the console.
