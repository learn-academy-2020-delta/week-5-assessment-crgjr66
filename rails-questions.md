# ASSESSMENT 5: Rails Practical Questions

1. What is the command to create a new Rails application with a Postgres database?
  - rails new <app_name> -d postgresql -T


2. Explain each section of the following route:  get '/library/:id' => 'book#show'

get - is taking URL input from '/library/:id' (where :id is the parameter) and passing it to our "book" controller method #show for processing
library - is the URL name, preceded by localhost:3000
:id - is the parameter being passed into our controller method
book - is our controller name
show - is our method that will process any input and render some out put on the localhost if necessary


3. Oops, I forgot to add a foreign key to my model. Describe the steps to remedy this mistake.

  1) need to generate a migration file: "rails generate migration add_foreign_key_to_model"
  2) inside the newly generated add_foreign_key_to_model.rb file, inside the def change method we need to add "add_column:model, :foreign_key, :integer", then SAVE
  3) do a "rails db:migrate" to perform the change


4. What is the command to generate a Rails model for a person table with columns named shirt, pants, and shoes?

rails generate model Person shirt:string pants:string shoes:string


5. I want to add validations to the model from question 4 to ensure no one can make a new entry without data in all the columns. How do I do that?

  1) edit the file \app\models\Person.rb
  2) inside the class Person add this line of code:
    class Person < Applicationrecord
      validates :shirt, :pants, :shoes, presence: true
    end
  3) then exit the rails console, and re-enter the console so that it understands the new validations


6. What is the naming convention for generating a Rails model? What is the naming convention for the table that is generated with this command?

  Rails model names are CamelCase and are not plural.  The table that will be generated from the model will be plural.  From our example above, if the model is generated with the following command:  
    rails generate model Person shirt:string pants:string shoes:string

    model = Person, table = Persons
