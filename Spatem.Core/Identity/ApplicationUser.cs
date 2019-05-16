﻿using Microsoft.AspNetCore.Identity;

namespace Spatem.Core.Identity
{
    public class ApplicationUser : IdentityUser
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
    }
}