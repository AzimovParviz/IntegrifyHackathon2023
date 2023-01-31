using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace _23._01
{
    public class Course
    {
        public string Name { get; set; }
    }

    public class Student
    {
        public string FirstName {get; set;}
        public string LastName {get;set;}

        public Student (string firstName, string lastName)
        {
            FirstName = firstName;
            LastName = lastName;
        }
    }
}