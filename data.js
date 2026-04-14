// Global data
const DATA = {
  // =================== Alabama ===================
    alabama: {
  name: "Alabama",
  img: "Images/Alabama/alabamaprofile.jpg",
  cities: {

    montgomery: {
      name: "Montgomery",
      img: "Images/montgomeryal.jpg",
      categories: {

        education: {
          label: "Education",
          subcategories: {
            public_schools: {
              label: "Public Schools",
              items: [
                {
                  name: "Montgomery High School",
                  description: "Public high school in Montgomery.",
                  address: "Example address",
                  img: "",
                  link: "#"
                }
              ]
            }
          }
        },

        healthcare: {
          label: "Healthcare",
          subcategories: {
            hospitals: {
              label: "Hospitals",
              items: [
                {
                  name: "Montgomery General Hospital",
                  description: "Hospital in Montgomery.",
                  address: "",
                  img: "",
                  link: "#"
                }
              ]
            }
          }
        }

      }
    }

  }
},

// =================== Alaska ===================
alaska: {
  name: "Alaska",
  img: "Images/Alaska/alaskaprofile.jpg",
  cities: {

    anchorage: {
      name: "Anchorage",
      img: "Images/city.jpg",
      categories: {

        education: {
          label: "Education",
          subcategories: {
            public_schools: {
              label: "Public Schools",
              items: [
                {
                  name: "Example School",
                  description: "Description",
                  address: "Address",
                  img: "",
                  link: "#"
                }
              ]
            }
          }
        }

      }
    }

  }
},

// =================== Arizona ===================
arizona: {
  name: "Arizona",
  img: "Images/Arizona/arizonaprofile.jpg",
  cities: {

    phoenix: {
      name: "Phoenix",
      img: "Images/city.jpg",
      categories: {

        education: {
          label: "Education",
          subcategories: {
            public_schools: {
              label: "Public Schools",
              items: [
                {
                  name: "Example School",
                  description: "Description",
                  address: "Address",
                  img: "",
                  link: "#"
                }
              ]
            }
          }
        }

      }
    }

  }
},

// =================== Arkansas ===================
arkansas: {
  name: "Arkansas",
  img: "Images/Arkansas/arkansasprofile.jpg",
  cities: {

    littlerock: {
      name: "Little Rock",
      img: "Images/city.jpg",
      categories: {

        education: {
          label: "Education",
          subcategories: {
            public_schools: {
              label: "Public Schools",
              items: [
                {
                  name: "Example School",
                  description: "Description",
                  address: "Address",
                  img: "",
                  link: "#"
                }
              ]
            }
          }
        }

      }
    }

  }
},

// =================== California ===================
california: {
  name: "California",
  img: "Images/California/californiaprofile.jpg",
  cities: {

    losangeles: {
      name: "Los Angeles",
      img: "Images/city.jpg",
      categories: {

        education: {
          label: "Education",
          subcategories: {
            public_schools: {
              label: "Public Schools",
              items: [
                {
                  name: "Example School",
                  description: "Description",
                  address: "Address",
                  img: "",
                  link: "#"
                }
              ]
            }
          }
        }

      }
    }

  }
},

// =================== Colorado ===================
colorado: {
  name: "Colorado",
  img: "Images/Colorado/coloradoprofile.jpg",
  cities: {

    denver: {
      name: "Denver",
      img: "Images/city.jpg",
      categories: {

        education: {
          label: "Education",
          subcategories: {
            public_schools: {
              label: "Public Schools",
              items: [
                {
                  name: "Example School",
                  description: "Description",
                  address: "Address",
                  img: "",
                  link: "#"
                }
              ]
            }
          }
        }

      }
    }

  }
},

// =================== Connecticut ===================
  connecticut: {
    name: "Connecticut",
    img: "Images/Connecticut/ctstatephoto.jpg",
    cities: {

      // =================== HARTFORD ===================
      hartford: {
        name: "Hartford",
        img: "Images/hartfordct.jpg",
        categories: {

          education: {
            label: "Education",
            subcategories: {
              public_schools: {
                label: "Public Schools",
                items: [
                  {
                    name: "Hartford Public High School",
                    description: "Major public high school in Hartford.",
                    address: "55 Forest St, Hartford, CT",
                    img: "Images/Connecticut/hartfordctschools.png",
                    link: "https://www.hartfordschools.org/o/hphs"
                  }
                ]
              },

              universities_colleges: {
                label: "Universities and Colleges",
                items: [
                  {
                    name: "University of Hartford",
                    description: "Private university in Hartford.",
                    address: "200 Bloomfield Ave, Hartford, CT",
                    img: "Images/Connecticut/uhart.png",
                    link: "https://www.hartford.edu/"
                  },
                  {
                    name: "UConn Hartford",
                    description: "Public university offering undergraduate and graduate programs.",
                    address: "10 Prospect St, Hartford, CT",
                    img: "Images/Connecticut/uconnhart.png",
                    link: "https://hartford.uconn.edu/"
                  },
                  {
                    name: "Trinity College",
                    description: "Private liberal arts college in Hartford, Connecticut.",
                    address: "300 Summit St, Hartford, CT",
                    img: "Images/Connecticut/trinitycollege.png",
                    link: "https://www.trincoll.edu/"
                  }
                ]
              }
            }
          },

          healthcare: {
            label: "Healthcare",
            subcategories: {
              hospitals: {
                label: "Hospitals",
                items: [
                  {
                    name: "Hartford Hospital",
                    description: "Major hospital in Hartford.",
                    address: "80 Seymour St, Hartford, CT",
                    img: "Images/Connecticut/hartfordhospital.png",
                    link: "https://hartfordhospital.org/"
                  },
                  {
                    name: "Trinity Health of New Englad",
                    description: "Major hospital in Hartford.",
                    address: "1000 Asylum Ave, 5th Floor, Hartford, CT",
                    img: "Images/Connecticut/trinityhealth.png",
                    link: "https://www.trinityhealthofne.org/location/trinity-health-of-new-england"
                  },
                   {
                    name: "Connecticut Children's Medical Center",
                    description: "A nationally ranked, independent, non-profit, pediatric acute care hospital located in Hartford, Connecticut.",
                    address: "282 Washington St, Hartford, CT",
                    img: "Images/Connecticut/ctchildrenhosp.png",
                    link: "https://www.connecticutchildrens.org/locations/connecticut-childrens-hartford"
                  }
                ]
              }
            }
          },

          publictransportation: {
            label: "Public Transportation",
            subcategories: {
              transportation: {
                label: "Transportation",
                items: [
                  {
                    name: "By Bus",
                    description: "Hartford Line",
                    img: "Images/Connecticut/hartfordbus.png",
                    link: "https://www.cttransit.com/services"
                  },
                  {
                    name: "By Train",
                    description: "Union Station",
                    address: "1 Union Pl., Hartford, CT",
                    img: "Images/Connecticut/unionstation.png",
                    link: "https://hartfordline.com/route_stations/hartford/"
                  },
                  {
                    name: "By Car",
                    description: "Hartford Parking",
                    img: "Images/Connecticut/parking.png",
                    link: "https://hartfordparking.com/"
                  }
                ]
              }
            }
          },

          employment: {
            label: "Employment",
            subcategories: {
              working_hartford: {
                label: "Employment Opportunities",
                items: [
                  {
                    type: "intro",
                    name: "Major Employers in Hartford",
                    description: "Overview of major employers and job opportunities in Hartford.",
                  },
                   {
                    name: "Aetna",
                    description: "Major healthcare company headquartered in Hartford.",
                    address: "151 Farmington Ave, Hartford, CT",
                    img: "Images/Connecticut/aetnabuilding.png",
                    link: "https://jobs.cvshealth.com/us/en"
                  },
                  {
                    name: "The Hartford",
                    description: "Insurance company with a large workforce in the city.",
                    address: "1 Hartford Plaza, Hartford, CT",
                    img: "Images/Connecticut/thehartford.png",
                    link: "https://www.thehartford.com/"
                  }
                ]
              }
            }
          },

          government: {
            label: "Government and City Resources",
            subcategories: {
              state_government: {
                label: "City Government and Community Resources",
                items: [
                  {
                    name: "The City of Hartford",
                    description: "Departments and Agencies",
                    img: "Images/Connecticut/cityofhartford.png",
                    link: "https://www.hartfordct.gov/Home"
                  },
                  {
                    name: "Public Safety and Emergency Services",
                    description: "Departments and Agencies",
                    img: "Images/Connecticut/hartfordctfiredept.png",
                    link: "https://www.hartfordct.gov/Government/Departments"
                  }
                ]
              }
            }
          },

          community: {
            label: "Things to Do",
            subcategories: {
              public_safety: {
                label: "Things to Do in Hartford",
                items: [
                  {
                    name: "Connecticut Convention Center",
                    description: "The Connecticut Convention Center is one of the northeast’s most ideal location for trade shows, conventions, business meetings or any occasion demanding a dramatic riverfront setting.",
                    img: "Images/Connecticut/ctconvention.png",
                    link: "https://www.ctconventions.com/"
                  },
                  {
                    name: "The Bushnell Performing Arts Center",
                    description: "Connecticut's premiere performing arts center, presenting more than 350 events annually, including major Broadway tours, symphony orchestras, and more.",
                    img: "Images/Connecticut/bushnellct.png",
                    link: "https://bushnell.org/"
                  }
                ]
              }
            }
          }

        } // end categories
      }, // end hartford

      // =================== NEW HAVEN ===================
        newhaven: {
        name: "New Haven",
        img: "Images/newhavenct.png",
        categories: {
          education: {
            label: "Education",
            subcategories: {
              public_schools: {
                label: "Public Schools",
                items: [
                  {
                    name: "New Haven High",
                    description: "High school in New Haven.",
                    address: "123 Main St, New Haven, CT",
                    img: "Images/newhaven/schools.png",
                    link: "#"
                  }
                ]
              }
            }
          }
        }
      },

      // =================== STAMFORD ===================
        stamford: {
        name: "Stamford",
        img: "Images/stamfordct.png",
        categories: {
          education: {
            label: "Education",
            subcategories: {
              public_schools: {
                label: "Public Schools",
                items: [
                  {
                    name: "Stamford High School",
                    description: "High school in Stamford.",
                    address: "123 Main St, Stamford, CT",
                    img: "Images/newhaven/schools.png",
                    link: "#"
                  }
                ]
              }
            }
          }
        }
      },

      // =================== DANBURY ===================
      danbury: {
        name: "Danbury",
        img: "Images/danburyct.png",
        categories: {
          education: {
            label: "Education",
            subcategories: {
              public_schools: {
                label: "Public Schools",
                items: [
                  {
                    name: "Danbury High School",
                    description: "High school in Danbury.",
                    address: "123 Main St, Danbury, CT",
                    img: "Images/newhaven/schools.png",
                    link: "#"
                  }
                ]
              }
            }
          }
        }
      },

      // =================== NORWALK ===================
      norwalk: {
        name: "Norwalk",
        img: "Images/norwalkct.png",
        categories: {
          education: {
            label: "Education",
            subcategories: {
              public_schools: {
                label: "Public Schools",
                items: [
                  {
                    name: "Norwalk High School",
                    description: "High school in Norwalk.",
                    address: "123 Main St, Norwalk, CT",
                    img: "Images/newhaven/schools.png",
                    link: "#"
                  }
                ]
              }
            }
          }
        }
      },

      // =================== BRIDGEPORT ===================
      bridgeport: {
        name: "Bridgeport",
        img: "Images/bridgeportct.png",
        categories: {
          education: {
            label: "Education",
            subcategories: {
              public_schools: {
                label: "Public Schools",
                items: [
                  {
                    name: "Bridgeport High School",
                    description: "High school in Bridgeport.",
                    address: "123 Main St, Bridgeport, CT",
                    img: "Images/newhaven/schools.png",
                    link: "#"
                  }
                ]
              }
            }
          }
        }
      },

      // =================== NEW BRITAIN ===================
      newbritain: {
        name: "New Britain",
        img: "Images/newbritainct.png",
        categories: {
          education: {
            label: "Education",
            subcategories: {
              public_schools: {
                label: "Public Schools",
                items: [
                  {
                    name: "New Britain High School",
                    description: "High school in New Britain.",
                    address: "123 Main St, New Britain, CT",
                    img: "Images/newhaven/schools.png",
                    link: "#"
                  }
                ]
              }
            }
          }
        }
      },

      // =================== NEW LONDON ===================
      newlondon: {
        name: "New London",
        img: "Images/newlondonct.png",
        categories: {
          education: {
            label: "Education",
            subcategories: {
              public_schools: {
                label: "Public Schools",
                items: [
                  {
                    name: "New London High School",
                    description: "High school in New London.",
                    address: "123 Main St, New London, CT",
                    img: "Images/newhaven/schools.png",
                    link: "#"
                  }
                ]
              }
            }
          }
        }
      },
    }
  },

// =================== Delaware ===================
delaware: {
  name: "Delaware",
  img: "Images/Delaware/delawareprofile.jpg",
  cities: {

    wilmington: {
      name: "Wilmington",
      img: "Images/city.jpg",
      categories: {

        education: {
          label: "Education",
          subcategories: {
            public_schools: {
              label: "Public Schools",
              items: [
                {
                  name: "Example School",
                  description: "Description",
                  address: "Address",
                  img: "",
                  link: "#"
                }
              ]
            }
          }
        }

      }
    }

  }
},

// =================== Florida ===================
florida: {
  name: "Florida",
  img: "Images/Florida/floridaprofile.jpg",
  cities: {

    miami: {
      name: "Miami",
      img: "Images/city.jpg",
      categories: {

        education: {
          label: "Education",
          subcategories: {
            public_schools: {
              label: "Public Schools",
              items: [
                {
                  name: "Example School",
                  description: "Description",
                  address: "Address",
                  img: "",
                  link: "#"
                }
              ]
            }
          }
        }

      }
    }

  }
},

// =================== Georgia ===================
georgia: {
  name: "Georgia",
  img: "Images/Georgia/georgiaprofile.jpg",
  cities: {

    atlanta: {
      name: "Atlanta",
      img: "Images/city.jpg",
      categories: {

        education: {
          label: "Education",
          subcategories: {
            public_schools: {
              label: "Public Schools",
              items: [
                {
                  name: "Example School",
                  description: "Description",
                  address: "Address",
                  img: "",
                  link: "#"
                }
              ]
            }
          }
        }

      }
    }

  }
},

// =================== Hawaii ===================
hawaii: {
  name: "Hawaii",
  img: "Images/Hawaii/hawaiiprofile.jpg",
  cities: {

    honolulu: {
      name: "Honolulu",
      img: "Images/city.jpg",
      categories: {

        education: {
          label: "Education",
          subcategories: {
            public_schools: {
              label: "Public Schools",
              items: [
                {
                  name: "Example School",
                  description: "Description",
                  address: "Address",
                  img: "",
                  link: "#"
                }
              ]
            }
          }
        }

      }
    }

  }
},

// =================== Idaho ===================
idaho: {
  name: "Idaho",
  img: "Images/Idaho/idahoprofile.jpg",
  cities: {

    boise: {
      name: "Boise",
      img: "Images/city.jpg",
      categories: {

        education: {
          label: "Education",
          subcategories: {
            public_schools: {
              label: "Public Schools",
              items: [
                {
                  name: "Example School",
                  description: "Description",
                  address: "Address",
                  img: "",
                  link: "#"
                }
              ]
            }
          }
        }

      }
    }

  }
},

// =================== Illinois ===================
illinois: {
  name: "Illinois",
  img: "Images/Illinois/illinoisprofile.jpg",
  cities: {

    chicago: {
      name: "Chicago",
      img: "Images/city.jpg",
      categories: {

        education: {
          label: "Education",
          subcategories: {
            public_schools: {
              label: "Public Schools",
              items: [
                {
                  name: "Example School",
                  description: "Description",
                  address: "Address",
                  img: "",
                  link: "#"
                }
              ]
            }
          }
        }

      }
    }

  }
},

// =================== Indiana ===================
indiana: {
  name: "Indiana",
  img: "Images/Indiana/indianaprofile.jpg",
  cities: {

    fortwayne: {
      name: "Fort Wayne",
      img: "Images/city.jpg",
      categories: {

        education: {
          label: "Education",
          subcategories: {
            public_schools: {
              label: "Public Schools",
              items: [
                {
                  name: "Example School",
                  description: "Description",
                  address: "Address",
                  img: "",
                  link: "#"
                }
              ]
            }
          }
        }

      }
    }

  }
},

// =================== Iowa ===================
iowa: {
  name: "Iowa",
  img: "Images/Iowa/iowaprofile.jpg",
  cities: {

    cedarrapids: {
      name: "Cedar Rapids",
      img: "Images/city.jpg",
      categories: {

        education: {
          label: "Education",
          subcategories: {
            public_schools: {
              label: "Public Schools",
              items: [
                {
                  name: "Example School",
                  description: "Description",
                  address: "Address",
                  img: "",
                  link: "#"
                }
              ]
            }
          }
        }

      }
    }

  }
},

// =================== Kansas ===================
kansas: {
  name: "Kansas",
  img: "Images/Kansas/kansasprofile.jpg",
  cities: {

    wichita: {
      name: "Wichita",
      img: "Images/city.jpg",
      categories: {

        education: {
          label: "Education",
          subcategories: {
            public_schools: {
              label: "Public Schools",
              items: [
                {
                  name: "Example School",
                  description: "Description",
                  address: "Address",
                  img: "",
                  link: "#"
                }
              ]
            }
          }
        }

      }
    }

  }
},

// =================== Kentucky ===================
kentucky: {
  name: "Kentucky",
  img: "Images/Kentucky/kentuckyprofile.jpg",
  cities: {

    louisville: {
      name: "Louisville",
      img: "Images/city.jpg",
      categories: {

        education: {
          label: "Education",
          subcategories: {
            public_schools: {
              label: "Public Schools",
              items: [
                {
                  name: "Example School",
                  description: "Description",
                  address: "Address",
                  img: "",
                  link: "#"
                }
              ]
            }
          }
        }

      }
    }

  }
},

// =================== Louisiana ===================
louisiana: {
  name: "Louisiana",
  img: "Images/Louisiana/louisianaprofile.jpg",
  cities: {

    lafayette: {
      name: "Lafayette",
      img: "Images/city.jpg",
      categories: {

        education: {
          label: "Education",
          subcategories: {
            public_schools: {
              label: "Public Schools",
              items: [
                {
                  name: "Example School",
                  description: "Description",
                  address: "Address",
                  img: "",
                  link: "#"
                }
              ]
            }
          }
        }

      }
    }

  }
},

// =================== Maine ===================
maine: {
  name: "Maine",
  img: "Images/Maine/maineprofile.jpg",
  cities: {

    portland: {
      name: "Portland",
      img: "Images/city.jpg",
      categories: {

        education: {
          label: "Education",
          subcategories: {
            public_schools: {
              label: "Public Schools",
              items: [
                {
                  name: "Example School",
                  description: "Description",
                  address: "Address",
                  img: "",
                  link: "#"
                }
              ]
            }
          }
        }

      }
    }

  }
},

// =================== Maryland ===================
maryland: {
  name: "Maryland",
  img: "Images/Maryland/marylandprofile.jpg",
  cities: {

    annapolis: {
      name: "Annapolis",
      img: "Images/city.jpg",
      categories: {

        education: {
          label: "Education",
          subcategories: {
            public_schools: {
              label: "Public Schools",
              items: [
                {
                  name: "Example School",
                  description: "Description",
                  address: "Address",
                  img: "",
                  link: "#"
                }
              ]
            }
          }
        }

      }
    }

  }
},

// =================== Massachusetts ===================
massachusetts: {
  name: "Massachusetts",
  img: "Images/Massachusetts/massprofile.jpg",
  cities: {

    boston: {
      name: "Boston",
      img: "Images/city.jpg",
      categories: {

        education: {
          label: "Education",
          subcategories: {
            public_schools: {
              label: "Public Schools",
              items: [
                {
                  name: "Example School",
                  description: "Description",
                  address: "Address",
                  img: "",
                  link: "#"
                }
              ]
            }
          }
        }

      }
    }

  }
},

// =================== Michigan ===================
michigan: {
  name: "Michigan",
  img: "Images/Michigan/michiganprofile.jpg",
  cities: {

    annarbor: {
      name: "Ann Arbor",
      img: "Images/city.jpg",
      categories: {

        education: {
          label: "Education",
          subcategories: {
            public_schools: {
              label: "Public Schools",
              items: [
                {
                  name: "Example School",
                  description: "Description",
                  address: "Address",
                  img: "",
                  link: "#"
                }
              ]
            }
          }
        }

      }
    }

  }
},

// =================== Minnesota ===================
minnesota: {
  name: "Minnesota",
  img: "Images/Minnesota/minnesotaprofile.jpg",
  cities: {

    minneapolis: {
      name: "Minneapolis",
      img: "Images/city.jpg",
      categories: {

        education: {
          label: "Education",
          subcategories: {
            public_schools: {
              label: "Public Schools",
              items: [
                {
                  name: "Example School",
                  description: "Description",
                  address: "Address",
                  img: "",
                  link: "#"
                }
              ]
            }
          }
        }

      }
    }

  }
},

// =================== Mississippi ===================
mississippi: {
  name: "Mississippi",
  img: "Images/Mississippi/mississippiprofile.jpg",
  cities: {

    greenville: {
      name: "Greenville",
      img: "Images/city.jpg",
      categories: {

        education: {
          label: "Education",
          subcategories: {
            public_schools: {
              label: "Public Schools",
              items: [
                {
                  name: "Example School",
                  description: "Description",
                  address: "Address",
                  img: "",
                  link: "#"
                }
              ]
            }
          }
        }

      }
    }

  }
},

// =================== Missouri ===================
missouri: {
  name: "Missouri",
  img: "Images/Missouri/missouriprofile.jpg",
  cities: {

    stlouis: {
      name: "St. Louis",
      img: "Images/city.jpg",
      categories: {

        education: {
          label: "Education",
          subcategories: {
            public_schools: {
              label: "Public Schools",
              items: [
                {
                  name: "Example School",
                  description: "Description",
                  address: "Address",
                  img: "",
                  link: "#"
                }
              ]
            }
          }
        }

      }
    }

  }
},

// =================== Montana ===================
montana: {
  name: "Montana",
  img: "Images/Montana/montanaprofile.jpg",
  cities: {

    billings: {
      name: "Billings",
      img: "Images/city.jpg",
      categories: {

        education: {
          label: "Education",
          subcategories: {
            public_schools: {
              label: "Public Schools",
              items: [
                {
                  name: "Example School",
                  description: "Description",
                  address: "Address",
                  img: "",
                  link: "#"
                }
              ]
            }
          }
        }

      }
    }

  }
},

// =================== Nebraska ===================
nebraska: {
  name: "Nebraska",
  img: "Images/Nebraska/nebraskaprofile.jpg",
  cities: {

    omaha: {
      name: "Omaha",
      img: "Images/city.jpg",
      categories: {

        education: {
          label: "Education",
          subcategories: {
            public_schools: {
              label: "Public Schools",
              items: [
                {
                  name: "Example School",
                  description: "Description",
                  address: "Address",
                  img: "",
                  link: "#"
                }
              ]
            }
          }
        }

      }
    }

  }
},

// =================== Nevada ===================
nevada: {
  name: "Nevada",
  img: "Images/Nevada/nevadaprofile.jpg",
  cities: {

    reno: {
      name: "Reno",
      img: "Images/city.jpg",
      categories: {

        education: {
          label: "Education",
          subcategories: {
            public_schools: {
              label: "Public Schools",
              items: [
                {
                  name: "Example School",
                  description: "Description",
                  address: "Address",
                  img: "",
                  link: "#"
                }
              ]
            }
          }
        }

      }
    }

  }
},

// =================== New Hampshire ===================
newhampshire: {
  name: "New Hampshire",
  img: "Images/Newhampshire/newhampshireprofile.jpg",
  cities: {

    portsmouth: {
      name: "Portsmouth",
      img: "Images/city.jpg",
      categories: {

        education: {
          label: "Education",
          subcategories: {
            public_schools: {
              label: "Public Schools",
              items: [
                {
                  name: "Example School",
                  description: "Description",
                  address: "Address",
                  img: "",
                  link: "#"
                }
              ]
            }
          }
        }

      }
    }

  }
},

// =================== New Jersey ===================
newjersey: {
  name: "New Jersey",
  img: "Images/Newjersey/newjerseyprofile.jpg",
  cities: {

    newark: {
      name: "Newark",
      img: "Images/city.jpg",
      categories: {

        education: {
          label: "Education",
          subcategories: {
            public_schools: {
              label: "Public Schools",
              items: [
                {
                  name: "Example School",
                  description: "Description",
                  address: "Address",
                  img: "",
                  link: "#"
                }
              ]
            }
          }
        }

      }
    }

  }
},

// =================== New Mexico ===================
newmexico: {
  name: "New Mexico",
  img: "Images/Newmexico/newmexicoprofile.jpg",
  cities: {

    santafe: {
      name: "Santa Fe",
      img: "Images/city.jpg",
      categories: {

        education: {
          label: "Education",
          subcategories: {
            public_schools: {
              label: "Public Schools",
              items: [
                {
                  name: "Example School",
                  description: "Description",
                  address: "Address",
                  img: "",
                  link: "#"
                }
              ]
            }
          }
        }

      }
    }

  }
},

// =================== New York ===================
newyork: {
  name: "New York",
  img: "Images/Newyork/newyorkprofile.jpg",
  cities: {

    albany: {
      name: "Albany",
      img: "Images/city.jpg",
      categories: {

        education: {
          label: "Education",
          subcategories: {
            public_schools: {
              label: "Public Schools",
              items: [
                {
                  name: "Example School",
                  description: "Description",
                  address: "Address",
                  img: "",
                  link: "#"
                }
              ]
            }
          }
        }

      }
    }

  }
},

// =================== North Carolina ===================
northcarolina: {
  name: "North Carolina",
  img: "Images/Northcarolina/northcarolinaprofile.jpg",
  cities: {

    raleigh: {
      name: "Raleigh",
      img: "Images/city.jpg",
      categories: {

        education: {
          label: "Education",
          subcategories: {
            public_schools: {
              label: "Public Schools",
              items: [
                {
                  name: "Example School",
                  description: "Description",
                  address: "Address",
                  img: "",
                  link: "#"
                }
              ]
            }
          }
        }

      }
    }

  }
},

// =================== North Dakota ===================
northdakota: {
  name: "North Dakota",
  img: "Images/Northdakota/northdakotaprofile.jpg",
  cities: {

    grandforks: {
      name: "Grand Forks",
      img: "Images/city.jpg",
      categories: {

        education: {
          label: "Education",
          subcategories: {
            public_schools: {
              label: "Public Schools",
              items: [
                {
                  name: "Example School",
                  description: "Description",
                  address: "Address",
                  img: "",
                  link: "#"
                }
              ]
            }
          }
        }

      }
    }

  }
},

// =================== Ohio ===================
ohio: {
  name: "Ohio",
  img: "Images/Ohio/ohioprofile.jpg",
  cities: {

    cleveland: {
      name: "Cleveland",
      img: "Images/city.jpg",
      categories: {

        education: {
          label: "Education",
          subcategories: {
            public_schools: {
              label: "Public Schools",
              items: [
                {
                  name: "Example School",
                  description: "Description",
                  address: "Address",
                  img: "",
                  link: "#"
                }
              ]
            }
          }
        }

      }
    }

  }
},

// =================== Oklahoma ===================
oklahoma: {
  name: "Oklahoma",
  img: "Images/Oklahoma/oklahomaprofile.jpg",
  cities: {

    tulsa: {
      name: "Tulsa",
      img: "Images/city.jpg",
      categories: {

        education: {
          label: "Education",
          subcategories: {
            public_schools: {
              label: "Public Schools",
              items: [
                {
                  name: "Example School",
                  description: "Description",
                  address: "Address",
                  img: "",
                  link: "#"
                }
              ]
            }
          }
        }

      }
    }

  }
},

// =================== Oregon ===================
oregon: {
  name: "Oregon",
  img: "Images/Oregon/oregonprofile.jpg",
  cities: {

    portland: {
      name: "Portland",
      img: "Images/city.jpg",
      categories: {

        education: {
          label: "Education",
          subcategories: {
            public_schools: {
              label: "Public Schools",
              items: [
                {
                  name: "Example School",
                  description: "Description",
                  address: "Address",
                  img: "",
                  link: "#"
                }
              ]
            }
          }
        }

      }
    }

  }
},

// =================== Pennsylvania ===================
pennsylvania: {
  name: "Pennsylvania",
  img: "Images/Pennsylvania/pennsylvaniaprofile.jpg",
  cities: {

    pittsburg: {
      name: "Pittsburg",
      img: "Images/city.jpg",
      categories: {

        education: {
          label: "Education",
          subcategories: {
            public_schools: {
              label: "Public Schools",
              items: [
                {
                  name: "Example School",
                  description: "Description",
                  address: "Address",
                  img: "",
                  link: "#"
                }
              ]
            }
          }
        }

      }
    }

  }
},

// =================== Rhode Island ===================
rhodeisland: {
  name: "Rhode Island",
  img: "Images/Rhodeisland/rhodeislandprofile.jpg",
  cities: {

    newport: {
      name: "Newport",
      img: "Images/city.jpg",
      categories: {

        education: {
          label: "Education",
          subcategories: {
            public_schools: {
              label: "Public Schools",
              items: [
                {
                  name: "Example School",
                  description: "Description",
                  address: "Address",
                  img: "",
                  link: "#"
                }
              ]
            }
          }
        }

      }
    }

  }
},

// =================== South Carolina ===================
southcarolina: {
  name: "South Carolina",
  img: "Images/Southcarolina/southcarolinaprofile.jpg",
  cities: {

    columbia: {
      name: "Columbia",
      img: "Images/city.jpg",
      categories: {

        education: {
          label: "Education",
          subcategories: {
            public_schools: {
              label: "Public Schools",
              items: [
                {
                  name: "Example School",
                  description: "Description",
                  address: "Address",
                  img: "",
                  link: "#"
                }
              ]
            }
          }
        }

      }
    }

  }
},

// =================== South Dakota ===================
southdakota: {
  name: "South Dakota",
  img: "Images/Southdakota/southdakotaprofile.jpg",
  cities: {

    siouxfalls: {
      name: "Sioux Falls",
      img: "Images/city.jpg",
      categories: {

        education: {
          label: "Education",
          subcategories: {
            public_schools: {
              label: "Public Schools",
              items: [
                {
                  name: "Example School",
                  description: "Description",
                  address: "Address",
                  img: "",
                  link: "#"
                }
              ]
            }
          }
        }

      }
    }

  }
},

// =================== Tennessee ===================
tennessee: {
  name: "Tennessee",
  img: "Images/Tennessee/tennesseeprofile.jpg",
  cities: {

    memphis: {
      name: "Memphis",
      img: "Images/city.jpg",
      categories: {

        education: {
          label: "Education",
          subcategories: {
            public_schools: {
              label: "Public Schools",
              items: [
                {
                  name: "Example School",
                  description: "Description",
                  address: "Address",
                  img: "",
                  link: "#"
                }
              ]
            }
          }
        }

      }
    }

  }
},

// =================== Texas ===================
texas: {
  name: "Texas",
  img: "Images/Texas/texasprofile.jpg",
  cities: {

    fortworth: {
      name: "Fort Worth",
      img: "Images/city.jpg",
      categories: {

        education: {
          label: "Education",
          subcategories: {
            public_schools: {
              label: "Public Schools",
              items: [
                {
                  name: "Example School",
                  description: "Description",
                  address: "Address",
                  img: "",
                  link: "#"
                }
              ]
            }
          }
        }

      }
    }

  }
},

// =================== Utah ===================
utah: {
  name: "Utah",
  img: "Images/Utah/utahprofile.jpg",
  cities: {

    saltlakecity: {
      name: "Salt Lake City",
      img: "Images/city.jpg",
      categories: {

        education: {
          label: "Education",
          subcategories: {
            public_schools: {
              label: "Public Schools",
              items: [
                {
                  name: "Example School",
                  description: "Description",
                  address: "Address",
                  img: "",
                  link: "#"
                }
              ]
            }
          }
        }

      }
    }

  }
},

// =================== Vermont ===================
vermont: {
  name: "Vermont",
  img: "Images/Vermont/vermontprofile.jpg",
  cities: {

    burlington: {
      name: "Burlington",
      img: "Images/city.jpg",
      categories: {

        education: {
          label: "Education",
          subcategories: {
            public_schools: {
              label: "Public Schools",
              items: [
                {
                  name: "Example School",
                  description: "Description",
                  address: "Address",
                  img: "",
                  link: "#"
                }
              ]
            }
          }
        }

      }
    }

  }
},

// =================== Virginia ===================
virginia: {
  name: "Virginia",
  img: "Images/Virginia/virginiaprofile.jpg",
  cities: {

    richmond: {
      name: "Richmond",
      img: "Images/city.jpg",
      categories: {

        education: {
          label: "Education",
          subcategories: {
            public_schools: {
              label: "Public Schools",
              items: [
                {
                  name: "Example School",
                  description: "Description",
                  address: "Address",
                  img: "",
                  link: "#"
                }
              ]
            }
          }
        }

      }
    }

  }
},

// =================== Washington ===================
washington: {
  name: "Washington",
  img: "Images/Washington/washingtonprofile.jpg",
  cities: {

    spokane: {
      name: "Spokane",
      img: "Images/city.jpg",
      categories: {

        education: {
          label: "Education",
          subcategories: {
            public_schools: {
              label: "Public Schools",
              items: [
                {
                  name: "Example School",
                  description: "Description",
                  address: "Address",
                  img: "",
                  link: "#"
                }
              ]
            }
          }
        }

      }
    }

  }
},

// =================== West Virginia ===================
westvirginia: {
  name: "West Virginia",
  img: "Images/Westvirginia/westvirginiaprofile.jpg",
  cities: {

    huntington: {
      name: "Huntington",
      img: "Images/city.jpg",
      categories: {

        education: {
          label: "Education",
          subcategories: {
            public_schools: {
              label: "Public Schools",
              items: [
                {
                  name: "Example School",
                  description: "Description",
                  address: "Address",
                  img: "",
                  link: "#"
                }
              ]
            }
          }
        }

      }
    }

  }
},

// =================== Wisconsin ===================
wisconsin: {
  name: "Wisconsin",
  img: "Images/Wisconsin/wisconsinprofile.jpg",
  cities: {

    madison: {
      name: "Madison",
      img: "Images/city.jpg",
      categories: {

        education: {
          label: "Education",
          subcategories: {
            public_schools: {
              label: "Public Schools",
              items: [
                {
                  name: "Example School",
                  description: "Description",
                  address: "Address",
                  img: "",
                  link: "#"
                }
              ]
            }
          }
        }

      }
    }

  }
},

// =================== Wyoming ===================
wyoming: {
  name: "Wyoming",
  img: "Images/Wyoming/wyomingprofile.jpg",
  cities: {

    casper: {
      name: "Casper",
      img: "Images/city.jpg",
      categories: {

        education: {
          label: "Education",
          subcategories: {
            public_schools: {
              label: "Public Schools",
              items: [
                {
                  name: "Example School",
                  description: "Description",
                  address: "Address",
                  img: "",
                  link: "#"
                }
              ]
            }
          }
        }

      }
    }

  }
},
// =================== add new state after },===================
}