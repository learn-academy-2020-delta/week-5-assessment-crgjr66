# ASSESSMENT 5: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. Rails follows an MVC pattern. What does that mean?

  Your answer: MVC stand for Model View Controller.  Off the top of my head I do not know exactly, but as I think over our rails work this week here's my best guess:
    Model - our program framework
    View - what the user sees, i.e. what is rendered on the localhost
    Controller - this is where the logic resides in our code, for processing data

  Researched answer: MVC Pattern stands for Model-View-Controller Pattern. This pattern is used to separate an application's concerns.

    Model - Model represents an object carrying data. It can also have logic to update controller if its data changes.

    View - View represents the visualization of the data that model contains.

    Controller - Controller acts on both model and view. It controls the data flow into model object and updates the view whenever data changes. It keeps view and model separate.


2. What does it mean if an application has CRUD? What does CRUD stand for?

  Your answer: I know CRUD stands for Create Read Update & Delete; and it applies to database applications. I do not specifically what it means if an application has CRUD.

  Researched answer: CRUD is an acronym for the four basic types of SQL commands: Create , Read , Update , Delete . Most applications have some kind of CRUD functionality, and we can assume that every programmer had to deal with CRUD at some point. A CRUD application is one that uses forms to get data into and out of a database. i.e. if we’re building an API that has a Recipe model, then that model should be able to Create new recipes, Read (or Show) those recipes, Update (and Edit) them, and lastly we should be able to Delete them.


3. What is a migration? Why would you use one?

  Your answer: A migration is a rails modification that you create/edit in order to modify an existing database.

  Researched answer: Rails Migration allows you to use Ruby to define changes to your database schema, making it possible to use a version control system to keep things synchronized with the actual code.


4. Describe as many possible relationships between a model called Person and a model called Computer as you can think of. Based on each description, which model would hold the foreign key?

  Your answer:
    1) A Person "has_many" computers; and a Computer "belongs_to" a Person.
    2) A person "has_one" computer; and a Computer "belongs_to" a Person.

    In these examples, the Computer would hold the foreign key.

  Researched answer: The following are valid connections between 2 Rails models:
  belongs_to, has_one, has_many, has_many :through, has_one :through, has_and_belongs_to_many


5. What is object-relational mapping?

  Your answer: It's a way of converting data between two systems. Active record helps us do that by converting Ruby commands to SQL so that we can interact with our database.

  Researched answer: Object-Relational Mapping (ORM) is a technique that lets you query and manipulate data from a database using an object-oriented paradigm. It is also a programming technique for converting data between incompatible type systems using object-oriented programming languages.


6. What is a gem?

  Your answer: Is a ruby chunk of code, similar to a small library that can be included and used in your project.

  Researched answer: Gems are open source libraries that contain Ruby code and are packaged with a little extra data . Using a gem allows a programmer to use the code within the gem in their own program, without explicitly inserting that code.


7. Why is it important to have validations in your application?

  Your answer: To make sure that all your input is valid so you don't get any unexpected processing errors, or NIL values.

  Researched answer: Validation will ensure any data entered by the user is valid and will prevent bugs creeping in due to invalid data. It also allows us to define and implement important rules around how the business operates and how the application should reflect and respect those rules.


## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.
- RESTful routes
    - A RESTful route is a mapping between HTTP verbs (get, post, put, delete, patch) to controller CRUD actions (create, read, update, delete). Instead of only the URL to indicate what site to visit, RESTful routes depend on the HTTP verb and the URL.
- JSON
    - Stands for Javascript Object Notation.  It is code used to store and transmit data objects that are key:value pairs or arrays. Basic data types include: number, string, boolean, array, object, and NULL.
- API
    - Application Programming Interface. It is a piece of software that allows 2 different applications to talk to each other.
- Endpoints
    - Endpoints are routes that are defined by your Rails application.  When you hit an endpoint you have reached a point in your code that will perform an action or allow you to access a resource. In Rails terms, an endpoint is a combination of the Route and Controller.
- Strong params
    - Strong params are a security feature that is build into Rails.  They help control what goes into creating new objects and help keep unwanted information out of our database.
