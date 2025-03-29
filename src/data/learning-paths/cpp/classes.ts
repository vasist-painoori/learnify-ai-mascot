
import { Topic } from '../../types';

export const classesTopic: Topic = {
  id: "cpp-classes",
  title: "Classes in C++",
  description: "Learn about object-oriented programming with classes in C++",
  content: `
# Classes in C++

Classes are the foundation of object-oriented programming in C++. They serve as blueprints for creating objects.
  `,
  codeExamples: [
    {
      title: "Class Definition and Object Creation",
      code: `#include <iostream>
#include <string>
#include <vector>

// Basic class definition
class Person {
private:
    // Private members (data hiding/encapsulation)
    std::string name;
    int age;
    
public:
    // Constructor
    Person(const std::string& name, int age) {
        this->name = name;
        this->age = age;
        std::cout << "Person constructor called" << std::endl;
    }
    
    // Default constructor
    Person() : name("Unknown"), age(0) {
        std::cout << "Person default constructor called" << std::endl;
    }
    
    // Copy constructor
    Person(const Person& other) : name(other.name), age(other.age) {
        std::cout << "Person copy constructor called" << std::endl;
    }
    
    // Destructor
    ~Person() {
        std::cout << "Person destructor called for " << name << std::endl;
    }
    
    // Member functions (methods)
    void introduce() const {
        std::cout << "Hello, my name is " << name << " and I am " << age << " years old." << std::endl;
    }
    
    // Getters and setters
    std::string getName() const {
        return name;
    }
    
    void setName(const std::string& name) {
        this->name = name;
    }
    
    int getAge() const {
        return age;
    }
    
    void setAge(int age) {
        if (age >= 0) {
            this->age = age;
        }
    }
    
    // Static member variable
    static int count;
    
    // Static member function
    static int getCount() {
        return count;
    }
};

// Define static member variable
int Person::count = 0;

// Inheritance
class Student : public Person {
private:
    std::string school;
    double gpa;
    
public:
    // Constructor that calls base class constructor
    Student(const std::string& name, int age, const std::string& school, double gpa)
        : Person(name, age), school(school), gpa(gpa) {
        std::cout << "Student constructor called" << std::endl;
    }
    
    // Default constructor
    Student() : Person(), school("Unknown"), gpa(0.0) {
        std::cout << "Student default constructor called" << std::endl;
    }
    
    // Destructor
    ~Student() {
        std::cout << "Student destructor called" << std::endl;
    }
    
    // Override introduce method
    void introduce() const {
        std::cout << "Hello, my name is " << getName() << ", I am " << getAge() << " years old, ";
        std::cout << "and I study at " << school << " with a GPA of " << gpa << "." << std::endl;
    }
    
    // Additional methods
    std::string getSchool() const {
        return school;
    }
    
    void setSchool(const std::string& school) {
        this->school = school;
    }
    
    double getGPA() const {
        return gpa;
    }
    
    void setGPA(double gpa) {
        if (gpa >= 0.0 && gpa <= 4.0) {
            this->gpa = gpa;
        }
    }
};

// Composition
class Address {
private:
    std::string street;
    std::string city;
    std::string zipCode;
    
public:
    Address(const std::string& street, const std::string& city, const std::string& zipCode)
        : street(street), city(city), zipCode(zipCode) {}
    
    std::string getFullAddress() const {
        return street + ", " + city + " " + zipCode;
    }
};

class Employee : public Person {
private:
    std::string company;
    double salary;
    Address* workAddress;  // Composition using pointer
    
public:
    Employee(const std::string& name, int age, const std::string& company, double salary,
             const std::string& street, const std::string& city, const std::string& zipCode)
        : Person(name, age), company(company), salary(salary) {
        workAddress = new Address(street, city, zipCode);
        std::cout << "Employee constructor called" << std::endl;
    }
    
    // Destructor (to prevent memory leaks)
    ~Employee() {
        delete workAddress;
        std::cout << "Employee destructor called" << std::endl;
    }
    
    // Override introduce method
    void introduce() const {
        std::cout << "Hello, my name is " << getName() << ", I am " << getAge() << " years old, ";
        std::cout << "and I work at " << company << " with a salary of $" << salary << "." << std::endl;
        std::cout << "My work address is: " << workAddress->getFullAddress() << std::endl;
    }
};

// Multiple inheritance
class Shape {
protected:
    std::string name;
    
public:
    Shape(const std::string& name) : name(name) {}
    
    virtual double area() const = 0;  // Pure virtual function
    
    std::string getName() const {
        return name;
    }
};

class Printable {
public:
    virtual void print() const = 0;  // Pure virtual function
};

class Circle : public Shape, public Printable {
private:
    double radius;
    
public:
    Circle(double radius) : Shape("Circle"), radius(radius) {}
    
    double area() const override {
        return 3.14159 * radius * radius;
    }
    
    void print() const override {
        std::cout << "Circle with radius " << radius << ", area: " << area() << std::endl;
    }
};

int main() {
    // Creating objects
    Person person1("Alice", 25);
    Person person2;  // Default constructor
    
    // Using member functions
    person1.introduce();
    person2.introduce();
    
    // Using getters and setters
    person2.setName("Bob");
    person2.setAge(30);
    std::cout << person2.getName() << " is " << person2.getAge() << " years old." << std::endl;
    
    // Copy constructor
    Person person3 = person1;
    person3.introduce();
    
    // Inheritance
    Student student1("Charlie", 20, "University of ABC", 3.8);
    student1.introduce();
    
    // Polymorphism
    Person* personPtr = &student1;
    personPtr->introduce();  // Calls Person::introduce() if not virtual
    
    // Composition
    Employee employee1("David", 35, "XYZ Corp", 75000, "123 Main St", "Anytown", "12345");
    employee1.introduce();
    
    // Multiple inheritance and polymorphism with virtual functions
    Circle circle(5.0);
    circle.print();
    
    // Using static members
    Person::count = 4;  // Set the count
    std::cout << "Number of Person objects: " << Person::getCount() << std::endl;
    
    // Creating array of objects
    std::vector<Person> people;
    people.push_back(Person("Eva", 28));
    people.push_back(Person("Frank", 32));
    
    for (const auto& p : people) {
        p.introduce();
    }
    
    return 0;
}`,
      explanation: "This example demonstrates various aspects of classes in C++, including class definition, member variables and functions, constructors, destructors, encapsulation through access modifiers, inheritance, polymorphism, composition, and static members. It also shows how to create and use objects, including object arrays and pointers to objects."
    }
  ],
  quiz: [
    {
      question: "What is the purpose of the 'this' pointer in C++?",
      options: [
        "It refers to the parent class",
        "It refers to the current object instance",
        "It refers to the next object to be created",
        "It is used to allocate memory for an object"
      ],
      correctAnswer: 1,
      explanation: "The 'this' pointer in C++ is a hidden parameter to all non-static member functions that points to the current object instance. It allows member functions to access the object's other members and to distinguish between local variables and member variables with the same name."
    }
  ],
  flashcards: [
    {
      front: "What is the difference between a struct and a class in C++?",
      back: "In C++, structs and classes are nearly identical, with only one key difference: in a struct, the default access specifier is public, while in a class, it's private. Traditionally, structs are used for passive data structures (mostly data, few methods), while classes are used for active objects with complex behaviors and data hiding."
    }
  ]
};
