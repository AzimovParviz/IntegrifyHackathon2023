using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace _23._01
{
    public class Employee
    {
        public string FirstName {get; init;}
        public string LastName {get; init;}

        public string? Title {get; set;}

        public virtual int Salary {get; set;} = 3000;

        public virtual int  Bonus {get; set;} = 100;

        public Employee? Supervisor {get; set;}

        private string _email;
        public string Email
        {
            get => _email;
            set 
            {
                if (value.IndexOf("@") < 0)
                {
                    throw new ArgumentException("Not valid");
                }
                _email = value
            }
        }

    }
}