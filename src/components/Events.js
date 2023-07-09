import React from "react";
import EventItem from "./EventItem";

export default function Events() {
  const events = [
    {
      "name": "Shania Twain: Queen Of Me Tour",
      "type": "event",
      "id": "vvG1fZ949qhf4C",
      "test": false,
      "url": "https://concerts.livenation.com/shania-twain-queen-of-me-tour-noblesville-indiana-07-15-2023/event/05005D55DD6D454E",
      "locale": "en-us",
      "images": [
        {
          "ratio": "3_2",
          "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_RETINA_PORTRAIT_3_2.jpg",
          "width": 640,
          "height": 427,
          "fallback": false
        },
        {
          "ratio": "16_9",
          "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_EVENT_DETAIL_PAGE_16_9.jpg",
          "width": 205,
          "height": 115,
          "fallback": false
        },
        {
          "ratio": "16_9",
          "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_RETINA_LANDSCAPE_16_9.jpg",
          "width": 1136,
          "height": 639,
          "fallback": false
        },
        {
          "ratio": "16_9",
          "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_TABLET_LANDSCAPE_16_9.jpg",
          "width": 1024,
          "height": 576,
          "fallback": false
        },
        {
          "ratio": "16_9",
          "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_RECOMENDATION_16_9.jpg",
          "width": 100,
          "height": 56,
          "fallback": false
        },
        {
          "ratio": "3_2",
          "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_TABLET_LANDSCAPE_3_2.jpg",
          "width": 1024,
          "height": 683,
          "fallback": false
        },
        {
          "ratio": "16_9",
          "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_TABLET_LANDSCAPE_LARGE_16_9.jpg",
          "width": 2048,
          "height": 1152,
          "fallback": false
        },
        {
          "ratio": "4_3",
          "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_CUSTOM.jpg",
          "width": 305,
          "height": 225,
          "fallback": false
        },
        {
          "ratio": "16_9",
          "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_RETINA_PORTRAIT_16_9.jpg",
          "width": 640,
          "height": 360,
          "fallback": false
        },
        {
          "ratio": "3_2",
          "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_ARTIST_PAGE_3_2.jpg",
          "width": 305,
          "height": 203,
          "fallback": false
        }
      ],
      "sales": {
        "public": {
          "startDateTime": "2022-11-04T14:00:00Z",
          "startTBD": false,
          "startTBA": false,
          "endDateTime": "2023-07-16T01:30:00Z"
        },
        "presales": [
          {
            "startDateTime": "2022-11-01T14:00:00Z",
            "endDateTime": "2022-11-04T02:00:00Z",
            "name": "VIP Packages Presale"
          },
          {
            "startDateTime": "2022-11-01T14:00:00Z",
            "endDateTime": "2022-11-04T02:00:00Z",
            "name": "Citi® Cardmember Presales"
          },
          {
            "startDateTime": "2022-11-03T14:00:00Z",
            "endDateTime": "2022-11-04T02:00:00Z",
            "name": "Live Nation Presale"
          },
          {
            "startDateTime": "2022-11-03T14:00:00Z",
            "endDateTime": "2022-11-18T03:00:00Z",
            "name": "Ruoff Employee Offer"
          },
          {
            "startDateTime": "2022-11-04T14:00:00Z",
            "endDateTime": "2023-07-01T21:00:00Z",
            "name": "VIP Packages Onsale"
          },
          {
            "startDateTime": "2022-11-03T14:00:00Z",
            "endDateTime": "2022-11-04T02:00:00Z",
            "name": "Aisle Seat Presale Offer"
          },
          {
            "startDateTime": "2022-11-01T14:00:00Z",
            "endDateTime": "2023-07-16T01:30:00Z",
            "name": "Official Platinum"
          },
          {
            "startDateTime": "2022-11-04T14:00:00Z",
            "endDateTime": "2023-06-17T21:00:00Z",
            "name": "Citi® Cardmember Preferred Tickets"
          },
          {
            "startDateTime": "2023-02-22T15:00:00Z",
            "endDateTime": "2023-02-27T03:00:00Z",
            "name": "Season Ticket Holder Offer"
          }
        ]
      },
      "dates": {
        "start": {
          "localDate": "2023-07-15",
          "localTime": "19:30:00",
          "dateTime": "2023-07-15T23:30:00Z",
          "dateTBD": false,
          "dateTBA": false,
          "timeTBA": false,
          "noSpecificTime": false
        },
        "timezone": "America/Indianapolis",
        "status": { "code": "onsale" },
        "spanMultipleDays": false
      },
      "classifications": [
        {
          "primary": true,
          "segment": { "id": "KZFzniwnSyZfZ7v7nJ", "name": "Music" },
          "genre": { "id": "KnvZfZ7vAv6", "name": "Country" },
          "subGenre": { "id": "KZazBEonSMnZfZ7vAFa", "name": "Country" },
          "type": { "id": "KZAyXgnZfZ7v7nI", "name": "Undefined" },
          "subType": { "id": "KZFzBErXgnZfZ7v7lJ", "name": "Undefined" },
          "family": false
        }
      ],
      "promoter": {
        "id": "653",
        "name": "LIVE NATION MUSIC",
        "description": "LIVE NATION MUSIC / NTL / USA"
      },
      "promoters": [
        {
          "id": "653",
          "name": "LIVE NATION MUSIC",
          "description": "LIVE NATION MUSIC / NTL / USA"
        }
      ],
      "pleaseNote": "General parking is included in the final purchase price. Premier Parking is also available.",
      "priceRanges": [
        { "type": "standard", "currency": "USD", "min": 39.95, "max": 249.95 }
      ],
      "products": [
        {
          "name": "Shania Twain - Upgrades & Extras",
          "id": "vvG1fZ901zv79z",
          "url": "http://concerts.livenation.com/event/05005E42B80445F8",
          "type": "Upsell Shell Event",
          "classifications": [
            {
              "primary": true,
              "segment": { "id": "KZFzniwnSyZfZ7v7nJ", "name": "Music" },
              "genre": { "id": "KnvZfZ7vAv6", "name": "Country" },
              "subGenre": { "id": "KZazBEonSMnZfZ7vAFa", "name": "Country" },
              "type": { "id": "KZAyXgnZfZ7v7nI", "name": "Undefined" },
              "subType": { "id": "KZFzBErXgnZfZ7v7lJ", "name": "Undefined" },
              "family": false
            }
          ]
        },
        {
          "name": "Lone Pine Lounge: Shania Twain - Not a Concert Ticket",
          "id": "vvG1fZ94NbSocm",
          "url": "http://concerts.livenation.com/event/05005D58D8CD1B6E",
          "type": "Club Access",
          "classifications": [
            {
              "primary": true,
              "segment": {
                "id": "KZFzniwnSyZfZ7v7n1",
                "name": "Miscellaneous"
              },
              "genre": { "id": "KnvZfZ7v7ll", "name": "Undefined" },
              "subGenre": {
                "id": "KZazBEonSMnZfZ7vAv1",
                "name": "Undefined"
              },
              "type": { "id": "KZAyXgnZfZ7v7nJ", "name": "Upsell" },
              "subType": {
                "id": "KZFzBErXgnZfZ7v7lF",
                "name": "Club Access"
              },
              "family": false
            }
          ]
        },
        {
          "name": "Live Nation Blanket: Shania Twain - Not a Concert Ticket",
          "id": "vvG1fZ94NbUvmd",
          "url": "http://concerts.livenation.com/event/05005D58D8D81B83",
          "type": "Merchandise Voucher",
          "classifications": [
            {
              "primary": true,
              "segment": {
                "id": "KZFzniwnSyZfZ7v7n1",
                "name": "Miscellaneous"
              },
              "genre": { "id": "KnvZfZ7v7ll", "name": "Undefined" },
              "subGenre": {
                "id": "KZazBEonSMnZfZ7vAv1",
                "name": "Undefined"
              },
              "type": { "id": "KZAyXgnZfZ7v7nJ", "name": "Upsell" },
              "subType": {
                "id": "KZFzBErXgnZfZ7vAke",
                "name": "Merchandise Voucher"
              },
              "family": false
            }
          ]
        },
        {
          "name": "Premier Club & Parking: Shania Twain - Not  a Concert Ticket",
          "id": "vvG1fZ94NbVvcS",
          "url": "http://concerts.livenation.com/event/05005D58D8D01B73",
          "type": "Club Access",
          "classifications": [
            {
              "primary": true,
              "segment": {
                "id": "KZFzniwnSyZfZ7v7n1",
                "name": "Miscellaneous"
              },
              "genre": { "id": "KnvZfZ7v7ll", "name": "Undefined" },
              "subGenre": {
                "id": "KZazBEonSMnZfZ7vAv1",
                "name": "Undefined"
              },
              "type": { "id": "KZAyXgnZfZ7v7nJ", "name": "Upsell" },
              "subType": {
                "id": "KZFzBErXgnZfZ7v7lF",
                "name": "Club Access"
              },
              "family": false
            }
          ]
        },
        {
          "name": "VIP Parking: Shania Twain - Not a Concert Ticket",
          "id": "vvG1fZ94Nbg-cy",
          "url": "http://concerts.livenation.com/event/05005D58D8D61B79",
          "type": "Parking",
          "classifications": [
            {
              "primary": true,
              "segment": {
                "id": "KZFzniwnSyZfZ7v7n1",
                "name": "Miscellaneous"
              },
              "genre": { "id": "KnvZfZ7v7ll", "name": "Undefined" },
              "subGenre": {
                "id": "KZazBEonSMnZfZ7vAv1",
                "name": "Undefined"
              },
              "type": { "id": "KZAyXgnZfZ7vAva", "name": "Parking" },
              "subType": { "id": "KZFzBErXgnZfZ7vAFk", "name": "Premier" },
              "family": false
            }
          ]
        },
        {
          "name": "Lawn Chair Rental: Shania Twain - Not a Concert Ticket",
          "id": "vvG1fZ94NbgscX",
          "url": "http://concerts.livenation.com/event/05005D58D8D71B7E",
          "type": "Merchandise Voucher",
          "classifications": [
            {
              "primary": true,
              "segment": {
                "id": "KZFzniwnSyZfZ7v7n1",
                "name": "Miscellaneous"
              },
              "genre": { "id": "KnvZfZ7v7ll", "name": "Undefined" },
              "subGenre": {
                "id": "KZazBEonSMnZfZ7vAv1",
                "name": "Undefined"
              },
              "type": { "id": "KZAyXgnZfZ7v7nJ", "name": "Upsell" },
              "subType": {
                "id": "KZFzBErXgnZfZ7vAF1",
                "name": "Lawn Chair Rental"
              },
              "family": false
            }
          ]
        },
        {
          "name": "Premier Parking: Shania Twain - Not a Concert Ticket",
          "id": "vvG1fZ94Nbgvcg",
          "url": "http://concerts.livenation.com/event/05005D58D8D41B75",
          "type": "Parking",
          "classifications": [
            {
              "primary": true,
              "segment": {
                "id": "KZFzniwnSyZfZ7v7n1",
                "name": "Miscellaneous"
              },
              "genre": { "id": "KnvZfZ7v7ll", "name": "Undefined" },
              "subGenre": {
                "id": "KZazBEonSMnZfZ7vAv1",
                "name": "Undefined"
              },
              "type": { "id": "KZAyXgnZfZ7vAva", "name": "Parking" },
              "subType": { "id": "KZFzBErXgnZfZ7vAFk", "name": "Premier" },
              "family": false
            }
          ]
        },
        {
          "name": "Premier Club: Shania Twain - Not a Concert Ticket",
          "id": "vvG1fZ94Nbs-c4",
          "url": "http://concerts.livenation.com/event/05005D58D8C61B55",
          "type": "Club Access",
          "classifications": [
            {
              "primary": true,
              "segment": {
                "id": "KZFzniwnSyZfZ7v7n1",
                "name": "Miscellaneous"
              },
              "genre": { "id": "KnvZfZ7v7ll", "name": "Undefined" },
              "subGenre": {
                "id": "KZazBEonSMnZfZ7vAv1",
                "name": "Undefined"
              },
              "type": { "id": "KZAyXgnZfZ7v7nJ", "name": "Upsell" },
              "subType": {
                "id": "KZFzBErXgnZfZ7v7lF",
                "name": "Club Access"
              },
              "family": false
            }
          ]
        },
        {
          "name": "Fast Lane: Shania Twain - Not a Concert Ticket",
          "id": "vvG1fZ94NbsocG",
          "url": "http://concerts.livenation.com/event/05005D58D8C51B4C",
          "type": "Special Entry",
          "classifications": [
            {
              "primary": true,
              "segment": {
                "id": "KZFzniwnSyZfZ7v7n1",
                "name": "Miscellaneous"
              },
              "genre": { "id": "KnvZfZ7v7ll", "name": "Undefined" },
              "subGenre": {
                "id": "KZazBEonSMnZfZ7vAv1",
                "name": "Undefined"
              },
              "type": { "id": "KZAyXgnZfZ7v7nJ", "name": "Upsell" },
              "subType": {
                "id": "KZFzBErXgnZfZ7vAFF",
                "name": "FastLane Access"
              },
              "family": false
            }
          ]
        },
        {
          "name": "VIP Club: Shania Twain - Not a Concert Ticket",
          "id": "vvG1fZ94Nbsvc1",
          "url": "http://concerts.livenation.com/event/05005D58D8C41B4A",
          "type": "Club Access",
          "classifications": [
            {
              "primary": true,
              "segment": {
                "id": "KZFzniwnSyZfZ7v7n1",
                "name": "Miscellaneous"
              },
              "genre": { "id": "KnvZfZ7v7ll", "name": "Undefined" },
              "subGenre": {
                "id": "KZazBEonSMnZfZ7vAv1",
                "name": "Undefined"
              },
              "type": { "id": "KZAyXgnZfZ7v7nJ", "name": "Upsell" },
              "subType": {
                "id": "KZFzBErXgnZfZ7vAFJ",
                "name": "VIP Club Access"
              },
              "family": false
            }
          ]
        },
        {
          "name": "Overlook Lawn Deck: Shania Twain - Not a Concert Ticket",
          "id": "vvG1fZ94Nbw-cN",
          "url": "http://concerts.livenation.com/event/05005D58D8CA1B63",
          "type": "Club Access",
          "classifications": [
            {
              "primary": true,
              "segment": {
                "id": "KZFzniwnSyZfZ7v7n1",
                "name": "Miscellaneous"
              },
              "genre": { "id": "KnvZfZ7v7ll", "name": "Undefined" },
              "subGenre": {
                "id": "KZazBEonSMnZfZ7vAv1",
                "name": "Undefined"
              },
              "type": { "id": "KZAyXgnZfZ7v7nJ", "name": "Upsell" },
              "subType": {
                "id": "KZFzBErXgnZfZ7v7lF",
                "name": "Club Access"
              },
              "family": false
            }
          ]
        },
        {
          "name": "Green Room: Shania Twain - Not a Concert Ticket",
          "id": "vvG1fZ94Nbwscn",
          "url": "http://concerts.livenation.com/event/05005D58D8CB1B6A",
          "type": "Club Access",
          "classifications": [
            {
              "primary": true,
              "segment": {
                "id": "KZFzniwnSyZfZ7v7n1",
                "name": "Miscellaneous"
              },
              "genre": { "id": "KnvZfZ7v7ll", "name": "Undefined" },
              "subGenre": {
                "id": "KZazBEonSMnZfZ7vAv1",
                "name": "Undefined"
              },
              "type": { "id": "KZAyXgnZfZ7v7nJ", "name": "Upsell" },
              "subType": {
                "id": "KZFzBErXgnZfZ7v7lF",
                "name": "Club Access"
              },
              "family": false
            }
          ]
        },
        {
          "name": "Coors VIP Deck: Shania Twain - Not a Concert Ticket",
          "id": "vvG1fZ94Nbwvcr",
          "url": "http://concerts.livenation.com/event/05005D58D8C81B5E",
          "type": "Club Access",
          "classifications": [
            {
              "primary": true,
              "segment": {
                "id": "KZFzniwnSyZfZ7v7n1",
                "name": "Miscellaneous"
              },
              "genre": { "id": "KnvZfZ7v7ll", "name": "Undefined" },
              "subGenre": {
                "id": "KZazBEonSMnZfZ7vAv1",
                "name": "Undefined"
              },
              "type": { "id": "KZAyXgnZfZ7v7nJ", "name": "Upsell" },
              "subType": {
                "id": "KZFzBErXgnZfZ7v7lF",
                "name": "Club Access"
              },
              "family": false
            }
          ]
        },
        {
          "name": "Shania Twain CD",
          "id": "vvG1fZ9pJVKx8V",
          "url": "http://concerts.livenation.com/event/05005D69B44E2434",
          "type": "Upsell",
          "classifications": [
            {
              "primary": true,
              "segment": {
                "id": "KZFzniwnSyZfZ7v7n1",
                "name": "Miscellaneous"
              },
              "genre": { "id": "KnvZfZ7v7ll", "name": "Undefined" },
              "subGenre": {
                "id": "KZazBEonSMnZfZ7vAv1",
                "name": "Undefined"
              },
              "type": { "id": "KZAyXgnZfZ7v7nJ", "name": "Upsell" },
              "subType": { "id": "KZFzBErXgnZfZ7vAkd", "name": "CD" },
              "family": false
            }
          ]
        }
      ],
      "seatmap": {
        "staticUrl": "https://maps.ticketmaster.com/maps/geometry/3/event/05005D55DD6D454E/staticImage?type=png&systemId=HOST"
      },
      "accessibility": {
        "info": "Accessible seating is available for wheelchairs, limited mobility and sight/hearing impaired customers and their companions.\r\n\r\nCompanions should purchase wheelchair seats as \"COMPANION\" seats. \r\n\r\nThere is a 4 ticket limit for all accessible seating (unless otherwise posted.)\r\n\r\nCustomers in need of limited mobility or sight/hearing impaired seating: Please contact Ruoff Music Center at: (317) 776-8181.",
        "ticketLimit": 20
      },
      "ticketLimit": {
        "info": "There is an overall 8 ticket limit for this event."
      },
      "ageRestrictions": { "legalAgeEnforced": false },
      "ticketing": {
        "safeTix": { "enabled": true },
        "allInclusivePricing": { "enabled": false }
      },
      "_links": {
        "self": {
          "href": "/discovery/v2/events/vvG1fZ949qhf4C?locale=en-us"
        },
        "attractions": [
          { "href": "/discovery/v2/attractions/K8vZ91719n0?locale=en-us" },
          { "href": "/discovery/v2/attractions/K8vZ917_bOf?locale=en-us" }
        ],
        "venues": [{ "href": "/discovery/v2/venues/KovZpvEk7A?locale=en-us" }]
      },
      "_embedded": {
        "venues": [
          {
            "name": "Ruoff Music Center",
            "type": "venue",
            "id": "KovZpvEk7A",
            "test": false,
            "url": "https://www.ticketmaster.com/ruoff-music-center-tickets-noblesville/venue/41099",
            "locale": "en-us",
            "aliases": [
              "deer creek",
              "verizon wireless music center",
              "deer creek music center",
              "oak mountain",
              "oak mountain amphitheatre"
            ],
            "images": [
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dbimages/21856v.jpg",
                "width": 205,
                "height": 115,
                "fallback": false
              }
            ],
            "postalCode": "46060",
            "timezone": "America/Indianapolis",
            "city": { "name": "Noblesville" },
            "state": { "name": "Indiana", "stateCode": "IN" },
            "country": {
              "name": "United States Of America",
              "countryCode": "US"
            },
            "address": { "line1": "12880 E. 146th St." },
            "location": {
              "longitude": "-85.93427182",
              "latitude": "40.00373203"
            },
            "markets": [{ "name": "Indianapolis and More", "id": "23" }],
            "dmas": [
              { "id": 274 },
              { "id": 281 },
              { "id": 303 },
              { "id": 314 },
              { "id": 390 },
              { "id": 397 }
            ],
            "boxOfficeInfo": {
              "phoneNumberDetail": "Admin: (317) 776-8181",
              "openHoursDetail": "The Box Office is open on shows days beginning at 12pm and on Fridays 12pm-6pm during the season.",
              "acceptedPaymentDetail": "The Box Office accepts cash, Visa, Mastercard, American Express and Discover.",
              "willCallDetail": "Tickets may be picked up beginning 2 hours prior to showtime at the Box Office Will Call Window. Customer must have the actual credit card used to place the order, a picture ID, and the order confirmation number."
            },
            "parkingDetail": "Parking is included when the tickets are purchased. Premier Parking is also available and can be purchased through Ticketmaster. Premier Parking provides parking within close proximity to the main ticket gates as well as a dedicated exit route for a speedy start to your drive home.",
            "accessibleSeatingDetail": "Accessible seating is available at all points of purchase. For additional information or assistance, feel free to call 317-776-8181.",
            "generalInfo": {
              "generalRule": "Food and water ARE permitted on most show days. Food must be in a clear plastic bag, up to one gallon in size. Water containers must be clear, sealed, or empty, and can be no larger than 1 liter. All items are subject to inspection. Lawn chairs with seat bottoms no taller than 9 inches off the ground, such as beach chairs or sand chairs, are permitted at selected shows. Please call on the day of the show you are attending to confirm our policy. Camera Policy: The camera policy for events tends to vary artist to artist. For most events, personal cameras and small digital cameras are permitted and professional cameras (any camera with a detachable lens or a zoom lens longer than 2\" long) are not permitted. For specific questions, feel free to call 317-776-8181 the day of the show for more information.",
              "childRule": "Children under 2 are admitted free on a parents lap or on lawn, unless otherwise stated. 2 and over require a ticket."
            },
            "upcomingEvents": {
              "ticketmaster": 34,
              "_total": 34,
              "_filtered": 0
            },
            "_links": {
              "self": {
                "href": "/discovery/v2/venues/KovZpvEk7A?locale=en-us"
              }
            }
          }
        ],
        "attractions": [
          {
            "name": "Shania Twain",
            "type": "attraction",
            "id": "K8vZ91719n0",
            "test": false,
            "url": "https://www.livenation.com/artist/K8vZ91719n0/shania-twain-events",
            "locale": "en-us",
            "externalLinks": {
              "youtube": [
                { "url": "https://www.youtube.com/user/ShaniaTwain" }
              ],
              "twitter": [{ "url": "https://twitter.com/FollowShania" }],
              "itunes": [
                {
                  "url": "https://music.apple.com/us/artist/shania-twain/129974"
                }
              ],
              "lastfm": [{ "url": "http://www.last.fm/music/Shania+Twain" }],
              "facebook": [{ "url": "https://www.facebook.com/ShaniaTwain" }],
              "wiki": [
                { "url": "https://en.wikipedia.org/wiki/Shania_Twain" }
              ],
              "spotify": [
                {
                  "url": "https://open.spotify.com/artist/5e4Dhzv426EvQe3aDb64jL"
                }
              ],
              "musicbrainz": [
                { "id": "faabb55d-3c9e-4c23-8779-732ac2ee2c0d" }
              ],
              "instagram": [
                { "url": "https://www.instagram.com/shaniatwain/" }
              ],
              "homepage": [{ "url": "http://www.shaniatwain.com/" }]
            },
            "aliases": ["shaina twain", "shania twain", "shinia twain"],
            "images": [
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_RETINA_PORTRAIT_3_2.jpg",
                "width": 640,
                "height": 427,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_EVENT_DETAIL_PAGE_16_9.jpg",
                "width": 205,
                "height": 115,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_RETINA_LANDSCAPE_16_9.jpg",
                "width": 1136,
                "height": 639,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_TABLET_LANDSCAPE_16_9.jpg",
                "width": 1024,
                "height": 576,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_RECOMENDATION_16_9.jpg",
                "width": 100,
                "height": 56,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_TABLET_LANDSCAPE_3_2.jpg",
                "width": 1024,
                "height": 683,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                "width": 2048,
                "height": 1152,
                "fallback": false
              },
              {
                "ratio": "4_3",
                "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_CUSTOM.jpg",
                "width": 305,
                "height": 225,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_RETINA_PORTRAIT_16_9.jpg",
                "width": 640,
                "height": 360,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_ARTIST_PAGE_3_2.jpg",
                "width": 305,
                "height": 203,
                "fallback": false
              }
            ],
            "classifications": [
              {
                "primary": true,
                "segment": { "id": "KZFzniwnSyZfZ7v7nJ", "name": "Music" },
                "genre": { "id": "KnvZfZ7vAv6", "name": "Country" },
                "subGenre": {
                  "id": "KZazBEonSMnZfZ7vAFa",
                  "name": "Country"
                },
                "type": { "id": "KZAyXgnZfZ7v7nI", "name": "Undefined" },
                "subType": {
                  "id": "KZFzBErXgnZfZ7v7lJ",
                  "name": "Undefined"
                },
                "family": false
              }
            ],
            "upcomingEvents": {
              "tmr": 1,
              "ticketmaster": 44,
              "_total": 45,
              "_filtered": 0
            },
            "_links": {
              "self": {
                "href": "/discovery/v2/attractions/K8vZ91719n0?locale=en-us"
              }
            }
          },
          {
            "name": "BRELAND",
            "type": "attraction",
            "id": "K8vZ917_bOf",
            "test": false,
            "url": "https://www.livenation.com/artist/K8vZ917_bOf/breland-events",
            "locale": "en-us",
            "externalLinks": {
              "spotify": [
                {
                  "url": "https://open.spotify.com/artist/0C86lmpnwiyLDUiyo4d0P1?si=rZ0xqBgXRcCK-hEBAoE4mg"
                }
              ],
              "facebook": [
                { "url": "https://www.facebook.com/brelandthepenpointguard/" }
              ],
              "instagram": [
                { "url": "https://www.instagram.com/breland/?hl=en" }
              ],
              "homepage": [{ "url": "https://www.brelandmusic.com/" }]
            },
            "images": [
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/e74/83efc299-69c1-4170-95a5-8f1a633b0e74_TABLET_LANDSCAPE_16_9.jpg",
                "width": 1024,
                "height": 576,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/e74/83efc299-69c1-4170-95a5-8f1a633b0e74_RECOMENDATION_16_9.jpg",
                "width": 100,
                "height": 56,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/e74/83efc299-69c1-4170-95a5-8f1a633b0e74_RETINA_LANDSCAPE_16_9.jpg",
                "width": 1136,
                "height": 639,
                "fallback": false
              },
              {
                "ratio": "4_3",
                "url": "https://s1.ticketm.net/dam/a/e74/83efc299-69c1-4170-95a5-8f1a633b0e74_CUSTOM.jpg",
                "width": 305,
                "height": 225,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/e74/83efc299-69c1-4170-95a5-8f1a633b0e74_ARTIST_PAGE_3_2.jpg",
                "width": 305,
                "height": 203,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/e74/83efc299-69c1-4170-95a5-8f1a633b0e74_EVENT_DETAIL_PAGE_16_9.jpg",
                "width": 205,
                "height": 115,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/e74/83efc299-69c1-4170-95a5-8f1a633b0e74_TABLET_LANDSCAPE_3_2.jpg",
                "width": 1024,
                "height": 683,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/e74/83efc299-69c1-4170-95a5-8f1a633b0e74_SOURCE",
                "width": 2426,
                "height": 1365,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/e74/83efc299-69c1-4170-95a5-8f1a633b0e74_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                "width": 2048,
                "height": 1152,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/e74/83efc299-69c1-4170-95a5-8f1a633b0e74_RETINA_PORTRAIT_3_2.jpg",
                "width": 640,
                "height": 427,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/e74/83efc299-69c1-4170-95a5-8f1a633b0e74_RETINA_PORTRAIT_16_9.jpg",
                "width": 640,
                "height": 360,
                "fallback": false
              }
            ],
            "classifications": [
              {
                "primary": true,
                "segment": { "id": "KZFzniwnSyZfZ7v7nJ", "name": "Music" },
                "genre": { "id": "KnvZfZ7vAv6", "name": "Country" },
                "subGenre": {
                  "id": "KZazBEonSMnZfZ7vAaA",
                  "name": "Country Pop"
                },
                "type": { "id": "KZAyXgnZfZ7v7la", "name": "Individual" },
                "subType": { "id": "KZFzBErXgnZfZ7vAd7", "name": "Musician" },
                "family": false
              }
            ],
            "upcomingEvents": {
              "mfx-dk": 1,
              "ticketmaster": 19,
              "mfx-no": 1,
              "_total": 21,
              "_filtered": 0
            },
            "_links": {
              "self": {
                "href": "/discovery/v2/attractions/K8vZ917_bOf?locale=en-us"
              }
            }
          }
        ]
      }
    },
    {
      "name": "Shania Twain: Queen Of Me Tour",
      "type": "event",
      "id": "G5vbZ940HyJDE",
      "test": false,
      "url": "https://concerts.livenation.com/shania-twain-queen-of-me-tour-burgettstown-pennsylvania-07-13-2023/event/16005D593CE66EE7",
      "locale": "en-us",
      "images": [
        {
          "ratio": "3_2",
          "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_RETINA_PORTRAIT_3_2.jpg",
          "width": 640,
          "height": 427,
          "fallback": false
        },
        {
          "ratio": "16_9",
          "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_EVENT_DETAIL_PAGE_16_9.jpg",
          "width": 205,
          "height": 115,
          "fallback": false
        },
        {
          "ratio": "16_9",
          "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_RETINA_LANDSCAPE_16_9.jpg",
          "width": 1136,
          "height": 639,
          "fallback": false
        },
        {
          "ratio": "16_9",
          "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_TABLET_LANDSCAPE_16_9.jpg",
          "width": 1024,
          "height": 576,
          "fallback": false
        },
        {
          "ratio": "16_9",
          "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_RECOMENDATION_16_9.jpg",
          "width": 100,
          "height": 56,
          "fallback": false
        },
        {
          "ratio": "3_2",
          "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_TABLET_LANDSCAPE_3_2.jpg",
          "width": 1024,
          "height": 683,
          "fallback": false
        },
        {
          "ratio": "16_9",
          "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_TABLET_LANDSCAPE_LARGE_16_9.jpg",
          "width": 2048,
          "height": 1152,
          "fallback": false
        },
        {
          "ratio": "4_3",
          "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_CUSTOM.jpg",
          "width": 305,
          "height": 225,
          "fallback": false
        },
        {
          "ratio": "16_9",
          "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_RETINA_PORTRAIT_16_9.jpg",
          "width": 640,
          "height": 360,
          "fallback": false
        },
        {
          "ratio": "3_2",
          "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_ARTIST_PAGE_3_2.jpg",
          "width": 305,
          "height": 203,
          "fallback": false
        }
      ],
      "sales": {
        "public": {
          "startDateTime": "2022-11-04T14:00:00Z",
          "startTBD": false,
          "startTBA": false,
          "endDateTime": "2023-07-14T01:30:00Z"
        },
        "presales": [
          {
            "startDateTime": "2022-11-03T14:00:00Z",
            "endDateTime": "2022-11-04T02:00:00Z",
            "name": "Live Nation Presale"
          },
          {
            "startDateTime": "2022-11-03T14:00:00Z",
            "endDateTime": "2022-11-04T02:00:00Z",
            "name": "CMA Presale"
          },
          {
            "startDateTime": "2022-11-01T14:00:00Z",
            "endDateTime": "2022-11-04T02:00:00Z",
            "name": "VIP Packages Presale"
          },
          {
            "startDateTime": "2022-11-04T14:00:00Z",
            "endDateTime": "2023-06-29T21:00:00Z",
            "name": "VIP Packages Onsale"
          },
          {
            "startDateTime": "2022-11-01T14:00:00Z",
            "endDateTime": "2022-11-04T02:00:00Z",
            "name": "Citi® Cardmember Presales"
          },
          {
            "startDateTime": "2022-11-04T14:00:00Z",
            "endDateTime": "2023-06-15T21:00:00Z",
            "name": "Citi® Cardmember Preferred Tickets"
          },
          {
            "startDateTime": "2023-02-22T15:00:00Z",
            "endDateTime": "2023-02-27T03:00:00Z",
            "name": "Season Ticket Holder Offer"
          },
          {
            "startDateTime": "2022-11-01T14:00:00Z",
            "endDateTime": "2023-07-14T01:30:00Z",
            "name": "Official Platinum"
          }
        ]
      },
      "dates": {
        "start": {
          "localDate": "2023-07-13",
          "localTime": "19:30:00",
          "dateTime": "2023-07-13T23:30:00Z",
          "dateTBD": false,
          "dateTBA": false,
          "timeTBA": false,
          "noSpecificTime": false
        },
        "timezone": "America/New_York",
        "status": { "code": "onsale" },
        "spanMultipleDays": false
      },
      "classifications": [
        {
          "primary": true,
          "segment": { "id": "KZFzniwnSyZfZ7v7nJ", "name": "Music" },
          "genre": { "id": "KnvZfZ7vAv6", "name": "Country" },
          "subGenre": { "id": "KZazBEonSMnZfZ7vAFa", "name": "Country" },
          "type": { "id": "KZAyXgnZfZ7v7nI", "name": "Undefined" },
          "subType": { "id": "KZFzBErXgnZfZ7v7lJ", "name": "Undefined" },
          "family": false
        }
      ],
      "promoter": {
        "id": "653",
        "name": "LIVE NATION MUSIC",
        "description": "LIVE NATION MUSIC / NTL / USA"
      },
      "promoters": [
        {
          "id": "653",
          "name": "LIVE NATION MUSIC",
          "description": "LIVE NATION MUSIC / NTL / USA"
        }
      ],
      "info": "This event is rain or shine.",
      "pleaseNote": "This event is rain or shine.",
      "priceRanges": [
        { "type": "standard", "currency": "USD", "min": 45.95, "max": 225.95 }
      ],
      "products": [
        {
          "name": "The Cabana - Shania Twain - Not a Concert Ticket",
          "id": "G5vbZ94HwvJVs",
          "url": "http://concerts.livenation.com/event/16005D5F32066D31",
          "type": "Club Access",
          "classifications": [
            {
              "primary": true,
              "segment": {
                "id": "KZFzniwnSyZfZ7v7n1",
                "name": "Miscellaneous"
              },
              "genre": { "id": "KnvZfZ7v7ll", "name": "Undefined" },
              "subGenre": {
                "id": "KZazBEonSMnZfZ7vAv1",
                "name": "Undefined"
              },
              "type": { "id": "KZAyXgnZfZ7v7nJ", "name": "Upsell" },
              "subType": {
                "id": "KZFzBErXgnZfZ7v7lF",
                "name": "Club Access"
              },
              "family": false
            }
          ]
        },
        {
          "name": "Live Nation Blanket - Shania Twain - Not a Concert Ticket",
          "id": "G5vbZ94Se4fii",
          "url": "http://concerts.livenation.com/event/16005D5CC2554B2C",
          "type": "Merchandise Voucher",
          "classifications": [
            {
              "primary": true,
              "segment": {
                "id": "KZFzniwnSyZfZ7v7n1",
                "name": "Miscellaneous"
              },
              "genre": { "id": "KnvZfZ7v7ll", "name": "Undefined" },
              "subGenre": {
                "id": "KZazBEonSMnZfZ7vAv1",
                "name": "Undefined"
              },
              "type": { "id": "KZAyXgnZfZ7v7nJ", "name": "Upsell" },
              "subType": {
                "id": "KZFzBErXgnZfZ7vAke",
                "name": "Merchandise Voucher"
              },
              "family": false
            }
          ]
        },
        {
          "name": "The Pavilion at Star Lake Parking - Shania Twain - Not An Event Ticket",
          "id": "G5vbZ94T28SW-",
          "url": "http://concerts.livenation.com/event/16005D5FCF433F61",
          "type": "Parking",
          "classifications": [
            {
              "primary": true,
              "segment": {
                "id": "KZFzniwnSyZfZ7v7n1",
                "name": "Miscellaneous"
              },
              "genre": { "id": "KnvZfZ7v7ll", "name": "Undefined" },
              "subGenre": {
                "id": "KZazBEonSMnZfZ7vAv1",
                "name": "Undefined"
              },
              "type": { "id": "KZAyXgnZfZ7vAva", "name": "Parking" },
              "subType": { "id": "KZFzBErXgnZfZ7vAFk", "name": "Premier" },
              "family": false
            }
          ]
        },
        {
          "name": "VIP Club Access - Shania Twain - Not a Concert Ticket",
          "id": "G5vbZ94wRWNs6",
          "url": "http://concerts.livenation.com/event/16005D5CAFF63C47",
          "type": "Club Access",
          "classifications": [
            {
              "primary": true,
              "segment": {
                "id": "KZFzniwnSyZfZ7v7n1",
                "name": "Miscellaneous"
              },
              "genre": { "id": "KnvZfZ7v7ll", "name": "Undefined" },
              "subGenre": {
                "id": "KZazBEonSMnZfZ7vAv1",
                "name": "Undefined"
              },
              "type": { "id": "KZAyXgnZfZ7v7nJ", "name": "Upsell" },
              "subType": {
                "id": "KZFzBErXgnZfZ7vAFJ",
                "name": "VIP Club Access"
              },
              "family": false
            }
          ]
        },
        {
          "name": "RE/Max Select Party Deck - Shania Twain - Not a Concert Ticket",
          "id": "G5vbZ94wSFNz3",
          "url": "http://concerts.livenation.com/event/16005D5CB3223E12",
          "type": "Club Access",
          "classifications": [
            {
              "primary": true,
              "segment": {
                "id": "KZFzniwnSyZfZ7v7n1",
                "name": "Miscellaneous"
              },
              "genre": { "id": "KnvZfZ7v7ll", "name": "Undefined" },
              "subGenre": {
                "id": "KZazBEonSMnZfZ7vAv1",
                "name": "Undefined"
              },
              "type": { "id": "KZAyXgnZfZ7v7nJ", "name": "Upsell" },
              "subType": {
                "id": "KZFzBErXgnZfZ7v7lF",
                "name": "Club Access"
              },
              "family": false
            }
          ]
        },
        {
          "name": "Star Lake Lounge - Shania Twain - Not a Concert Ticket",
          "id": "G5vbZ94wmoNlm",
          "url": "http://concerts.livenation.com/event/16005D5CAE463AEE",
          "type": "Club Access",
          "classifications": [
            {
              "primary": true,
              "segment": {
                "id": "KZFzniwnSyZfZ7v7n1",
                "name": "Miscellaneous"
              },
              "genre": { "id": "KnvZfZ7v7ll", "name": "Undefined" },
              "subGenre": {
                "id": "KZazBEonSMnZfZ7vAv1",
                "name": "Undefined"
              },
              "type": { "id": "KZAyXgnZfZ7v7nJ", "name": "Upsell" },
              "subType": {
                "id": "KZFzBErXgnZfZ7v7lF",
                "name": "Club Access"
              },
              "family": false
            }
          ]
        },
        {
          "name": "Fast Lane - Shania Twain - Not a Concert Ticket",
          "id": "G5vbZ94ws3KSK",
          "url": "http://concerts.livenation.com/event/16005D5CB1493CD3",
          "type": "Special Entry",
          "classifications": [
            {
              "primary": true,
              "segment": {
                "id": "KZFzniwnSyZfZ7v7n1",
                "name": "Miscellaneous"
              },
              "genre": { "id": "KnvZfZ7v7ll", "name": "Undefined" },
              "subGenre": {
                "id": "KZazBEonSMnZfZ7vAv1",
                "name": "Undefined"
              },
              "type": { "id": "KZAyXgnZfZ7v7nJ", "name": "Upsell" },
              "subType": {
                "id": "KZFzBErXgnZfZ7vAFF",
                "name": "FastLane Access"
              },
              "family": false
            }
          ]
        },
        {
          "name": "Shania Twain - Upgrades & Extras",
          "id": "G5vbZ9cjFcIKY",
          "url": "http://concerts.livenation.com/event/16005ED708B684F0",
          "type": "Upsell Shell Event",
          "classifications": [
            {
              "primary": true,
              "segment": { "id": "KZFzniwnSyZfZ7v7nJ", "name": "Music" },
              "genre": { "id": "KnvZfZ7vAv6", "name": "Country" },
              "subGenre": { "id": "KZazBEonSMnZfZ7vAFa", "name": "Country" },
              "type": { "id": "KZAyXgnZfZ7v7nI", "name": "Undefined" },
              "subType": { "id": "KZFzBErXgnZfZ7v7lJ", "name": "Undefined" },
              "family": false
            }
          ]
        },
        {
          "name": "Lawn Chair Rental - Shania Twain - Not A Concert Ticket",
          "id": "G5vbZ9pASDOTo",
          "url": "http://concerts.livenation.com/event/16005D6173EE0FD1",
          "type": "Merchandise Voucher",
          "classifications": [
            {
              "primary": true,
              "segment": {
                "id": "KZFzniwnSyZfZ7v7n1",
                "name": "Miscellaneous"
              },
              "genre": { "id": "KnvZfZ7v7ll", "name": "Undefined" },
              "subGenre": {
                "id": "KZazBEonSMnZfZ7vAv1",
                "name": "Undefined"
              },
              "type": { "id": "KZAyXgnZfZ7v7nJ", "name": "Upsell" },
              "subType": {
                "id": "KZFzBErXgnZfZ7vAF1",
                "name": "Lawn Chair Rental"
              },
              "family": false
            }
          ]
        },
        {
          "name": "Shania Twain CD",
          "id": "G5vbZ9pJU8N65",
          "url": "http://concerts.livenation.com/event/16005D69B64231CB",
          "type": "Upsell",
          "classifications": [
            {
              "primary": true,
              "segment": {
                "id": "KZFzniwnSyZfZ7v7n1",
                "name": "Miscellaneous"
              },
              "genre": { "id": "KnvZfZ7v7ll", "name": "Undefined" },
              "subGenre": {
                "id": "KZazBEonSMnZfZ7vAv1",
                "name": "Undefined"
              },
              "type": { "id": "KZAyXgnZfZ7v7nJ", "name": "Upsell" },
              "subType": { "id": "KZFzBErXgnZfZ7vAkd", "name": "CD" },
              "family": false
            }
          ]
        }
      ],
      "seatmap": {
        "staticUrl": "https://maps.ticketmaster.com/maps/geometry/3/event/16005D593CE66EE7/staticImage?type=png&systemId=HOST"
      },
      "accessibility": { "ticketLimit": 4 },
      "ticketLimit": {
        "info": "There is an overall 8 ticket limit for this event."
      },
      "ageRestrictions": { "legalAgeEnforced": false },
      "ticketing": {
        "safeTix": { "enabled": true },
        "allInclusivePricing": { "enabled": false }
      },
      "_links": {
        "self": { "href": "/discovery/v2/events/G5vbZ940HyJDE?locale=en-us" },
        "attractions": [
          { "href": "/discovery/v2/attractions/K8vZ91719n0?locale=en-us" },
          { "href": "/discovery/v2/attractions/K8vZ917_bOf?locale=en-us" }
        ],
        "venues": [
          { "href": "/discovery/v2/venues/KovZpZAEk71A?locale=en-us" }
        ]
      },
      "_embedded": {
        "venues": [
          {
            "name": "The Pavilion at Star Lake",
            "type": "venue",
            "id": "KovZpZAEk71A",
            "test": false,
            "url": "https://www.ticketmaster.com/the-pavilion-at-star-lake-tickets-burgettstown/venue/180232",
            "locale": "en-us",
            "aliases": [
              "post gazette pavilion",
              "post gazette pavilion at star lake",
              "post gazette pavillion",
              "star lake amphitheatre"
            ],
            "images": [
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dbimages/22498v.jpg",
                "width": 205,
                "height": 115,
                "fallback": false
              }
            ],
            "postalCode": "15021",
            "timezone": "America/New_York",
            "city": { "name": "Burgettstown" },
            "state": { "name": "Pennsylvania", "stateCode": "PA" },
            "country": {
              "name": "United States Of America",
              "countryCode": "US"
            },
            "address": { "line1": "665 Route 18" },
            "location": {
              "longitude": "-80.4342124",
              "latitude": "40.4197818"
            },
            "markets": [{ "name": "Pittsburgh", "id": "19" }],
            "dmas": [{ "id": 271 }, { "id": 307 }, { "id": 360 }],
            "boxOfficeInfo": {
              "phoneNumberDetail": "724-947-7400:Administration Receptionist",
              "openHoursDetail": "For the safety of our employees and guests, the box office will be closed until further notice. Please keep checking back here for updates as to when we re-open. We appreciate your understanding.",
              "acceptedPaymentDetail": "The Box Office accepts Visa, Mastercard, Discover, American Express and cash. Tickets purchased at the Box Office will include a per ticket service charge.",
              "willCallDetail": "Will Call tickets can be picked up beginning 2 hours prior to showtime on the night of the show at Box Office Windows 1 and 2. Customers must present the credit card the tickets were purchased with, confirmation number and a picture ID. Will Call is only available on the night of show."
            },
            "parkingDetail": "General parking is included with ticket purchase. Parking upgrades are available for purchase in advance or onsite.",
            "accessibleSeatingDetail": "Accessible seating for shows is available on-line or by phone.",
            "generalInfo": {
              "generalRule": "Bag Policy: No larger than 14”x11”x16”, Bags and Drawstring Backpacks (Please note that these will be searched upon entering) Camera Policy: Personal cameras are allowed in the venue. Flash photography, video and removable lens cameras are not permitted without venue approval. Contact (724) 947-7400 on the day of the show for details. No pets, banners or other prohibited items allowed. Camera Policy: Personal cameras are allowed in the venue. Flash photography, video and removable lens cameras are not permitted without venue approval.",
              "childRule": "There are no age restrictions, but everyone must have a ticket."
            },
            "upcomingEvents": {
              "ticketmaster": 25,
              "_total": 25,
              "_filtered": 0
            },
            "_links": {
              "self": {
                "href": "/discovery/v2/venues/KovZpZAEk71A?locale=en-us"
              }
            }
          }
        ],
        "attractions": [
          {
            "name": "Shania Twain",
            "type": "attraction",
            "id": "K8vZ91719n0",
            "test": false,
            "url": "https://www.livenation.com/artist/K8vZ91719n0/shania-twain-events",
            "locale": "en-us",
            "externalLinks": {
              "youtube": [
                { "url": "https://www.youtube.com/user/ShaniaTwain" }
              ],
              "twitter": [{ "url": "https://twitter.com/FollowShania" }],
              "itunes": [
                {
                  "url": "https://music.apple.com/us/artist/shania-twain/129974"
                }
              ],
              "lastfm": [{ "url": "http://www.last.fm/music/Shania+Twain" }],
              "facebook": [{ "url": "https://www.facebook.com/ShaniaTwain" }],
              "wiki": [
                { "url": "https://en.wikipedia.org/wiki/Shania_Twain" }
              ],
              "spotify": [
                {
                  "url": "https://open.spotify.com/artist/5e4Dhzv426EvQe3aDb64jL"
                }
              ],
              "musicbrainz": [
                { "id": "faabb55d-3c9e-4c23-8779-732ac2ee2c0d" }
              ],
              "instagram": [
                { "url": "https://www.instagram.com/shaniatwain/" }
              ],
              "homepage": [{ "url": "http://www.shaniatwain.com/" }]
            },
            "aliases": ["shaina twain", "shania twain", "shinia twain"],
            "images": [
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_RETINA_PORTRAIT_3_2.jpg",
                "width": 640,
                "height": 427,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_EVENT_DETAIL_PAGE_16_9.jpg",
                "width": 205,
                "height": 115,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_RETINA_LANDSCAPE_16_9.jpg",
                "width": 1136,
                "height": 639,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_TABLET_LANDSCAPE_16_9.jpg",
                "width": 1024,
                "height": 576,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_RECOMENDATION_16_9.jpg",
                "width": 100,
                "height": 56,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_TABLET_LANDSCAPE_3_2.jpg",
                "width": 1024,
                "height": 683,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                "width": 2048,
                "height": 1152,
                "fallback": false
              },
              {
                "ratio": "4_3",
                "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_CUSTOM.jpg",
                "width": 305,
                "height": 225,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_RETINA_PORTRAIT_16_9.jpg",
                "width": 640,
                "height": 360,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_ARTIST_PAGE_3_2.jpg",
                "width": 305,
                "height": 203,
                "fallback": false
              }
            ],
            "classifications": [
              {
                "primary": true,
                "segment": { "id": "KZFzniwnSyZfZ7v7nJ", "name": "Music" },
                "genre": { "id": "KnvZfZ7vAv6", "name": "Country" },
                "subGenre": {
                  "id": "KZazBEonSMnZfZ7vAFa",
                  "name": "Country"
                },
                "type": { "id": "KZAyXgnZfZ7v7nI", "name": "Undefined" },
                "subType": {
                  "id": "KZFzBErXgnZfZ7v7lJ",
                  "name": "Undefined"
                },
                "family": false
              }
            ],
            "upcomingEvents": {
              "tmr": 1,
              "ticketmaster": 44,
              "_total": 45,
              "_filtered": 0
            },
            "_links": {
              "self": {
                "href": "/discovery/v2/attractions/K8vZ91719n0?locale=en-us"
              }
            }
          },
          {
            "name": "BRELAND",
            "type": "attraction",
            "id": "K8vZ917_bOf",
            "test": false,
            "url": "https://www.livenation.com/artist/K8vZ917_bOf/breland-events",
            "locale": "en-us",
            "externalLinks": {
              "spotify": [
                {
                  "url": "https://open.spotify.com/artist/0C86lmpnwiyLDUiyo4d0P1?si=rZ0xqBgXRcCK-hEBAoE4mg"
                }
              ],
              "facebook": [
                { "url": "https://www.facebook.com/brelandthepenpointguard/" }
              ],
              "instagram": [
                { "url": "https://www.instagram.com/breland/?hl=en" }
              ],
              "homepage": [{ "url": "https://www.brelandmusic.com/" }]
            },
            "images": [
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/e74/83efc299-69c1-4170-95a5-8f1a633b0e74_TABLET_LANDSCAPE_16_9.jpg",
                "width": 1024,
                "height": 576,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/e74/83efc299-69c1-4170-95a5-8f1a633b0e74_RECOMENDATION_16_9.jpg",
                "width": 100,
                "height": 56,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/e74/83efc299-69c1-4170-95a5-8f1a633b0e74_RETINA_LANDSCAPE_16_9.jpg",
                "width": 1136,
                "height": 639,
                "fallback": false
              },
              {
                "ratio": "4_3",
                "url": "https://s1.ticketm.net/dam/a/e74/83efc299-69c1-4170-95a5-8f1a633b0e74_CUSTOM.jpg",
                "width": 305,
                "height": 225,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/e74/83efc299-69c1-4170-95a5-8f1a633b0e74_ARTIST_PAGE_3_2.jpg",
                "width": 305,
                "height": 203,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/e74/83efc299-69c1-4170-95a5-8f1a633b0e74_EVENT_DETAIL_PAGE_16_9.jpg",
                "width": 205,
                "height": 115,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/e74/83efc299-69c1-4170-95a5-8f1a633b0e74_TABLET_LANDSCAPE_3_2.jpg",
                "width": 1024,
                "height": 683,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/e74/83efc299-69c1-4170-95a5-8f1a633b0e74_SOURCE",
                "width": 2426,
                "height": 1365,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/e74/83efc299-69c1-4170-95a5-8f1a633b0e74_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                "width": 2048,
                "height": 1152,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/e74/83efc299-69c1-4170-95a5-8f1a633b0e74_RETINA_PORTRAIT_3_2.jpg",
                "width": 640,
                "height": 427,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/e74/83efc299-69c1-4170-95a5-8f1a633b0e74_RETINA_PORTRAIT_16_9.jpg",
                "width": 640,
                "height": 360,
                "fallback": false
              }
            ],
            "classifications": [
              {
                "primary": true,
                "segment": { "id": "KZFzniwnSyZfZ7v7nJ", "name": "Music" },
                "genre": { "id": "KnvZfZ7vAv6", "name": "Country" },
                "subGenre": {
                  "id": "KZazBEonSMnZfZ7vAaA",
                  "name": "Country Pop"
                },
                "type": { "id": "KZAyXgnZfZ7v7la", "name": "Individual" },
                "subType": { "id": "KZFzBErXgnZfZ7vAd7", "name": "Musician" },
                "family": false
              }
            ],
            "upcomingEvents": {
              "mfx-dk": 1,
              "ticketmaster": 19,
              "mfx-no": 1,
              "_total": 21,
              "_filtered": 0
            },
            "_links": {
              "self": {
                "href": "/discovery/v2/attractions/K8vZ917_bOf?locale=en-us"
              }
            }
          }
        ]
      }
    },
    {
      "name": "Shania Twain: Queen Of Me Tour",
      "type": "event",
      "id": "vvG1YZ94E4EgM4",
      "test": false,
      "url": "https://concerts.livenation.com/shania-twain-queen-of-me-tour-dallas-texas-07-21-2023/event/0C005D59D59F5DD5",
      "locale": "en-us",
      "images": [
        {
          "ratio": "3_2",
          "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_RETINA_PORTRAIT_3_2.jpg",
          "width": 640,
          "height": 427,
          "fallback": false
        },
        {
          "ratio": "16_9",
          "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_EVENT_DETAIL_PAGE_16_9.jpg",
          "width": 205,
          "height": 115,
          "fallback": false
        },
        {
          "ratio": "16_9",
          "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_RETINA_LANDSCAPE_16_9.jpg",
          "width": 1136,
          "height": 639,
          "fallback": false
        },
        {
          "ratio": "16_9",
          "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_TABLET_LANDSCAPE_16_9.jpg",
          "width": 1024,
          "height": 576,
          "fallback": false
        },
        {
          "ratio": "16_9",
          "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_RECOMENDATION_16_9.jpg",
          "width": 100,
          "height": 56,
          "fallback": false
        },
        {
          "ratio": "3_2",
          "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_TABLET_LANDSCAPE_3_2.jpg",
          "width": 1024,
          "height": 683,
          "fallback": false
        },
        {
          "ratio": "16_9",
          "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_TABLET_LANDSCAPE_LARGE_16_9.jpg",
          "width": 2048,
          "height": 1152,
          "fallback": false
        },
        {
          "ratio": "4_3",
          "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_CUSTOM.jpg",
          "width": 305,
          "height": 225,
          "fallback": false
        },
        {
          "ratio": "16_9",
          "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_RETINA_PORTRAIT_16_9.jpg",
          "width": 640,
          "height": 360,
          "fallback": false
        },
        {
          "ratio": "3_2",
          "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_ARTIST_PAGE_3_2.jpg",
          "width": 305,
          "height": 203,
          "fallback": false
        }
      ],
      "sales": {
        "public": {
          "startDateTime": "2022-11-04T15:00:00Z",
          "startTBD": false,
          "startTBA": false,
          "endDateTime": "2023-07-22T02:30:00Z"
        },
        "presales": [
          {
            "startDateTime": "2022-11-01T15:00:00Z",
            "endDateTime": "2022-11-04T03:00:00Z",
            "name": "Official Platinum Presale"
          },
          {
            "startDateTime": "2022-11-01T15:00:00Z",
            "endDateTime": "2022-11-04T03:00:00Z",
            "name": "VIP Packages Presale"
          },
          {
            "startDateTime": "2022-11-01T15:00:00Z",
            "endDateTime": "2022-11-03T03:00:00Z",
            "name": "Citi® Cardmember Aisle Presale"
          },
          {
            "startDateTime": "2022-11-01T15:00:00Z",
            "endDateTime": "2022-11-04T03:00:00Z",
            "name": "Citi® Cardmember Presale"
          },
          {
            "startDateTime": "2022-11-03T15:00:00Z",
            "endDateTime": "2022-11-04T03:00:00Z",
            "name": "Aisle Seat Offer Presale"
          },
          {
            "startDateTime": "2022-11-03T15:00:00Z",
            "endDateTime": "2022-11-04T03:00:00Z",
            "name": "Live Nation Presale"
          },
          {
            "startDateTime": "2022-11-04T15:00:00Z",
            "endDateTime": "2023-06-23T22:00:00Z",
            "name": "Citi® Cardmember Preferred Tickets"
          },
          {
            "startDateTime": "2022-11-04T15:00:00Z",
            "endDateTime": "2023-07-07T22:00:00Z",
            "name": "VIP Packages Onsale"
          },
          {
            "startDateTime": "2022-11-04T15:00:00Z",
            "endDateTime": "2023-07-22T02:30:00Z",
            "name": "Aisle Seating Onsale"
          },
          {
            "startDateTime": "2022-11-04T15:00:00Z",
            "endDateTime": "2023-07-22T02:30:00Z",
            "name": "Official Platinum Onsale"
          }
        ]
      },
      "dates": {
        "start": {
          "localDate": "2023-07-21",
          "localTime": "19:30:00",
          "dateTime": "2023-07-22T00:30:00Z",
          "dateTBD": false,
          "dateTBA": false,
          "timeTBA": false,
          "noSpecificTime": false
        },
        "timezone": "America/Chicago",
        "status": { "code": "onsale" },
        "spanMultipleDays": false
      },
      "classifications": [
        {
          "primary": true,
          "segment": { "id": "KZFzniwnSyZfZ7v7nJ", "name": "Music" },
          "genre": { "id": "KnvZfZ7vAv6", "name": "Country" },
          "subGenre": { "id": "KZazBEonSMnZfZ7vAFa", "name": "Country" },
          "type": { "id": "KZAyXgnZfZ7v7nI", "name": "Undefined" },
          "subType": { "id": "KZFzBErXgnZfZ7v7lJ", "name": "Undefined" },
          "family": false
        }
      ],
      "promoter": {
        "id": "653",
        "name": "LIVE NATION MUSIC",
        "description": "LIVE NATION MUSIC / NTL / USA"
      },
      "promoters": [
        {
          "id": "653",
          "name": "LIVE NATION MUSIC",
          "description": "LIVE NATION MUSIC / NTL / USA"
        }
      ],
      "priceRanges": [
        { "type": "standard", "currency": "USD", "min": 55.95, "max": 265.95 }
      ],
      "products": [
        {
          "name": "Dos Equis Pavilion Ultra VIP Parking: Shania Twain",
          "id": "vvG1YZ94R4eN5C",
          "url": "http://concerts.livenation.com/event/0C005D5BD50A32CE",
          "type": "Parking",
          "classifications": [
            {
              "primary": true,
              "segment": {
                "id": "KZFzniwnSyZfZ7v7n1",
                "name": "Miscellaneous"
              },
              "genre": { "id": "KnvZfZ7v7ll", "name": "Undefined" },
              "subGenre": {
                "id": "KZazBEonSMnZfZ7vAv1",
                "name": "Undefined"
              },
              "type": { "id": "KZAyXgnZfZ7vAva", "name": "Parking" },
              "subType": { "id": "KZFzBErXgnZfZ7vAFk", "name": "Premier" },
              "family": false
            }
          ]
        },
        {
          "name": "Lawn Chair Rental: Shania Twain",
          "id": "vvG1YZ94ReSwRN",
          "url": "http://concerts.livenation.com/event/0C005D5BC2CF2BE3",
          "type": "Merchandise Voucher",
          "classifications": [
            {
              "primary": true,
              "segment": {
                "id": "KZFzniwnSyZfZ7v7n1",
                "name": "Miscellaneous"
              },
              "genre": { "id": "KnvZfZ7v7ll", "name": "Undefined" },
              "subGenre": {
                "id": "KZazBEonSMnZfZ7vAv1",
                "name": "Undefined"
              },
              "type": { "id": "KZAyXgnZfZ7v7nJ", "name": "Upsell" },
              "subType": {
                "id": "KZFzBErXgnZfZ7vAF1",
                "name": "Lawn Chair Rental"
              },
              "family": false
            }
          ]
        },
        {
          "name": "Lonestar Cabana: Shania Twain",
          "id": "vvG1YZ94Rv83iX",
          "url": "http://concerts.livenation.com/event/0C005D5BC1412B3E",
          "type": "Club Access",
          "classifications": [
            {
              "primary": true,
              "segment": {
                "id": "KZFzniwnSyZfZ7v7n1",
                "name": "Miscellaneous"
              },
              "genre": { "id": "KnvZfZ7v7ll", "name": "Undefined" },
              "subGenre": {
                "id": "KZazBEonSMnZfZ7vAv1",
                "name": "Undefined"
              },
              "type": { "id": "KZAyXgnZfZ7v7nJ", "name": "Upsell" },
              "subType": {
                "id": "KZFzBErXgnZfZ7v7lF",
                "name": "Club Access"
              },
              "family": false
            }
          ]
        },
        {
          "name": "Dos Equis Pavilion VIP Parking: Shania Twain",
          "id": "vvG1YZ94XDN0cT",
          "url": "http://concerts.livenation.com/event/0C005D5FBB8E4B7F",
          "type": "Parking",
          "classifications": [
            {
              "primary": true,
              "segment": {
                "id": "KZFzniwnSyZfZ7v7n1",
                "name": "Miscellaneous"
              },
              "genre": { "id": "KnvZfZ7v7ll", "name": "Undefined" },
              "subGenre": {
                "id": "KZazBEonSMnZfZ7vAv1",
                "name": "Undefined"
              },
              "type": { "id": "KZAyXgnZfZ7vAva", "name": "Parking" },
              "subType": { "id": "KZFzBErXgnZfZ7vAFe", "name": "Regular" },
              "family": false
            }
          ]
        },
        {
          "name": "Dos Equis Live Nation Lounge: Shania Twain",
          "id": "vvG1YZ94mS6w4r",
          "url": "http://concerts.livenation.com/event/0C005D5BB31F255E",
          "type": "Club Access",
          "classifications": [
            {
              "primary": true,
              "segment": {
                "id": "KZFzniwnSyZfZ7v7n1",
                "name": "Miscellaneous"
              },
              "genre": { "id": "KnvZfZ7v7ll", "name": "Undefined" },
              "subGenre": {
                "id": "KZazBEonSMnZfZ7vAv1",
                "name": "Undefined"
              },
              "type": { "id": "KZAyXgnZfZ7v7nJ", "name": "Upsell" },
              "subType": {
                "id": "KZFzBErXgnZfZ7vAFJ",
                "name": "VIP Club Access"
              },
              "family": false
            }
          ]
        },
        {
          "name": "Dos Equis Pavilion Fast Lane Access: Shania Twain",
          "id": "vvG1YZ94mw7eK_",
          "url": "http://concerts.livenation.com/event/0C005D5BB21024D9",
          "type": "Special Entry",
          "classifications": [
            {
              "primary": true,
              "segment": {
                "id": "KZFzniwnSyZfZ7v7n1",
                "name": "Miscellaneous"
              },
              "genre": { "id": "KnvZfZ7v7ll", "name": "Undefined" },
              "subGenre": {
                "id": "KZazBEonSMnZfZ7vAv1",
                "name": "Undefined"
              },
              "type": { "id": "KZAyXgnZfZ7v7nJ", "name": "Upsell" },
              "subType": {
                "id": "KZFzBErXgnZfZ7vAFF",
                "name": "FastLane Access"
              },
              "family": false
            }
          ]
        },
        {
          "name": "Shania Twain CD",
          "id": "vvG1YZ9pJtEx63",
          "url": "http://concerts.livenation.com/event/0C005D69A99E21D2",
          "type": "Upsell",
          "classifications": [
            {
              "primary": true,
              "segment": {
                "id": "KZFzniwnSyZfZ7v7n1",
                "name": "Miscellaneous"
              },
              "genre": { "id": "KnvZfZ7v7ll", "name": "Undefined" },
              "subGenre": {
                "id": "KZazBEonSMnZfZ7vAv1",
                "name": "Undefined"
              },
              "type": { "id": "KZAyXgnZfZ7v7nJ", "name": "Upsell" },
              "subType": { "id": "KZFzBErXgnZfZ7vAkd", "name": "CD" },
              "family": false
            }
          ]
        }
      ],
      "seatmap": {
        "staticUrl": "https://maps.ticketmaster.com/maps/geometry/3/event/0C005D59D59F5DD5/staticImage?type=png&systemId=HOST"
      },
      "accessibility": { "ticketLimit": 4 },
      "ticketLimit": {
        "info": "There is an overall 8 ticket limit for this event."
      },
      "ageRestrictions": { "legalAgeEnforced": false },
      "ticketing": {
        "safeTix": { "enabled": true },
        "allInclusivePricing": { "enabled": false }
      },
      "_links": {
        "self": {
          "href": "/discovery/v2/events/vvG1YZ94E4EgM4?locale=en-us"
        },
        "attractions": [
          { "href": "/discovery/v2/attractions/K8vZ91719n0?locale=en-us" }
        ],
        "venues": [
          { "href": "/discovery/v2/venues/KovZpZAEAFeA?locale=en-us" }
        ]
      },
      "_embedded": {
        "venues": [
          {
            "name": "Dos Equis Pavilion",
            "type": "venue",
            "id": "KovZpZAEAFeA",
            "test": false,
            "url": "https://www.ticketmaster.com/dos-equis-pavilion-tickets-dallas/venue/98330",
            "locale": "en-us",
            "aliases": [
              "smirnoff music center",
              "smirnoff music centre",
              "starplex"
            ],
            "images": [
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dbimages/22185v.jpg",
                "width": 205,
                "height": 115,
                "fallback": false
              }
            ],
            "postalCode": "75210",
            "timezone": "America/Chicago",
            "city": { "name": "Dallas" },
            "state": { "name": "Texas", "stateCode": "TX" },
            "country": {
              "name": "United States Of America",
              "countryCode": "US"
            },
            "address": { "line1": "3839 S Fitzhugh" },
            "location": {
              "longitude": "-96.75646586",
              "latitude": "32.77507215"
            },
            "markets": [
              { "name": "Dallas - Fort Worth and More", "id": "5" }
            ],
            "dmas": [
              { "id": 212 },
              { "id": 218 },
              { "id": 261 },
              { "id": 326 },
              { "id": 386 },
              { "id": 405 },
              { "id": 415 }
            ],
            "boxOfficeInfo": {
              "phoneNumberDetail": "214-421-1111",
              "openHoursDetail": "For the safety of our employees and guests, the box office will be closed until further notice. Please keep checking back here for updates as to when we re-open. We appreciate your understanding.",
              "acceptedPaymentDetail": "Cash, Visa, MasterCard, Discover and American Express",
              "willCallDetail": "Tickets may be picked up 90 minutes prior to showtime or door time. Tickets must be picked-up by the cardholder with the credit card used to place the order and valid photo I.D."
            },
            "parkingDetail": "Parking is only charged if the price is NOT included in the ticket.",
            "accessibleSeatingDetail": "100 Level : Accessible seating is available on Platforms in the back of sections 100 and 102. 200 Level : Accessible seating is available on Platforms in front of sections 200 and 205. LAWN : Accessible seating is available on Platforms on the front of the lawn behind sections 200 and 205.",
            "generalInfo": {
              "generalRule": "No food, drinks, coolers, lawn chairs, umbrellas allowed. The amphitheatre institutes a \"No re-entry policy\" for all events. Gates into the pavilion open ninety minutes prior to the scheduled performance time. Certain shows may restrict all beer and wine sales at that performers request. Note the clock in the concession stand indicates the time that the sale of alcoholic beverages is scheduled to be discontinued. Certain events may also ban blankets for lawn seating. Events go on as scheduled, rain or shine. If it rains on the day of an event, lawn seat patrons are encouraged to bring a blanket or plastic tarp to sit on. Camera Policy: Personal cameras are allowed in the venue. Flash photography, video and removable lens cameras are not permitted without venue approval.",
              "childRule": "If a child has celebrated their 2nd birthday they must have a ticket. Prices are the same for children as adults."
            },
            "upcomingEvents": {
              "ticketmaster": 28,
              "_total": 28,
              "_filtered": 0
            },
            "_links": {
              "self": {
                "href": "/discovery/v2/venues/KovZpZAEAFeA?locale=en-us"
              }
            }
          }
        ],
        "attractions": [
          {
            "name": "Shania Twain",
            "type": "attraction",
            "id": "K8vZ91719n0",
            "test": false,
            "url": "https://www.livenation.com/artist/K8vZ91719n0/shania-twain-events",
            "locale": "en-us",
            "externalLinks": {
              "youtube": [
                { "url": "https://www.youtube.com/user/ShaniaTwain" }
              ],
              "twitter": [{ "url": "https://twitter.com/FollowShania" }],
              "itunes": [
                {
                  "url": "https://music.apple.com/us/artist/shania-twain/129974"
                }
              ],
              "lastfm": [{ "url": "http://www.last.fm/music/Shania+Twain" }],
              "facebook": [{ "url": "https://www.facebook.com/ShaniaTwain" }],
              "wiki": [
                { "url": "https://en.wikipedia.org/wiki/Shania_Twain" }
              ],
              "spotify": [
                {
                  "url": "https://open.spotify.com/artist/5e4Dhzv426EvQe3aDb64jL"
                }
              ],
              "musicbrainz": [
                { "id": "faabb55d-3c9e-4c23-8779-732ac2ee2c0d" }
              ],
              "instagram": [
                { "url": "https://www.instagram.com/shaniatwain/" }
              ],
              "homepage": [{ "url": "http://www.shaniatwain.com/" }]
            },
            "aliases": ["shaina twain", "shania twain", "shinia twain"],
            "images": [
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_RETINA_PORTRAIT_3_2.jpg",
                "width": 640,
                "height": 427,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_EVENT_DETAIL_PAGE_16_9.jpg",
                "width": 205,
                "height": 115,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_RETINA_LANDSCAPE_16_9.jpg",
                "width": 1136,
                "height": 639,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_TABLET_LANDSCAPE_16_9.jpg",
                "width": 1024,
                "height": 576,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_RECOMENDATION_16_9.jpg",
                "width": 100,
                "height": 56,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_TABLET_LANDSCAPE_3_2.jpg",
                "width": 1024,
                "height": 683,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                "width": 2048,
                "height": 1152,
                "fallback": false
              },
              {
                "ratio": "4_3",
                "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_CUSTOM.jpg",
                "width": 305,
                "height": 225,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_RETINA_PORTRAIT_16_9.jpg",
                "width": 640,
                "height": 360,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_ARTIST_PAGE_3_2.jpg",
                "width": 305,
                "height": 203,
                "fallback": false
              }
            ],
            "classifications": [
              {
                "primary": true,
                "segment": { "id": "KZFzniwnSyZfZ7v7nJ", "name": "Music" },
                "genre": { "id": "KnvZfZ7vAv6", "name": "Country" },
                "subGenre": {
                  "id": "KZazBEonSMnZfZ7vAFa",
                  "name": "Country"
                },
                "type": { "id": "KZAyXgnZfZ7v7nI", "name": "Undefined" },
                "subType": {
                  "id": "KZFzBErXgnZfZ7v7lJ",
                  "name": "Undefined"
                },
                "family": false
              }
            ],
            "upcomingEvents": {
              "tmr": 1,
              "ticketmaster": 44,
              "_total": 45,
              "_filtered": 0
            },
            "_links": {
              "self": {
                "href": "/discovery/v2/attractions/K8vZ91719n0?locale=en-us"
              }
            }
          }
        ]
      }
    },
    {
      "name": "Shania Twain: Queen Of Me Tour",
      "type": "event",
      "id": "vvG17Z94Eh3gx_",
      "test": false,
      "url": "https://concerts.livenation.com/shania-twain-queen-of-me-tour-mansfield-massachusetts-07-09-2023/event/01005D59DB4B5899",
      "locale": "en-us",
      "images": [
        {
          "ratio": "3_2",
          "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_RETINA_PORTRAIT_3_2.jpg",
          "width": 640,
          "height": 427,
          "fallback": false
        },
        {
          "ratio": "16_9",
          "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_EVENT_DETAIL_PAGE_16_9.jpg",
          "width": 205,
          "height": 115,
          "fallback": false
        },
        {
          "ratio": "16_9",
          "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_RETINA_LANDSCAPE_16_9.jpg",
          "width": 1136,
          "height": 639,
          "fallback": false
        },
        {
          "ratio": "16_9",
          "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_TABLET_LANDSCAPE_16_9.jpg",
          "width": 1024,
          "height": 576,
          "fallback": false
        },
        {
          "ratio": "16_9",
          "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_RECOMENDATION_16_9.jpg",
          "width": 100,
          "height": 56,
          "fallback": false
        },
        {
          "ratio": "3_2",
          "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_TABLET_LANDSCAPE_3_2.jpg",
          "width": 1024,
          "height": 683,
          "fallback": false
        },
        {
          "ratio": "16_9",
          "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_TABLET_LANDSCAPE_LARGE_16_9.jpg",
          "width": 2048,
          "height": 1152,
          "fallback": false
        },
        {
          "ratio": "4_3",
          "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_CUSTOM.jpg",
          "width": 305,
          "height": 225,
          "fallback": false
        },
        {
          "ratio": "16_9",
          "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_RETINA_PORTRAIT_16_9.jpg",
          "width": 640,
          "height": 360,
          "fallback": false
        },
        {
          "ratio": "3_2",
          "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_ARTIST_PAGE_3_2.jpg",
          "width": 305,
          "height": 203,
          "fallback": false
        }
      ],
      "sales": {
        "public": {
          "startDateTime": "2022-11-04T14:00:00Z",
          "startTBD": false,
          "startTBA": false,
          "endDateTime": "2023-07-10T00:30:00Z"
        },
        "presales": [
          {
            "startDateTime": "2022-11-01T14:00:00Z",
            "endDateTime": "2022-11-04T02:00:00Z",
            "name": "Citi® Cardmember Presales"
          },
          {
            "startDateTime": "2022-11-03T14:00:00Z",
            "endDateTime": "2022-11-04T02:00:00Z",
            "name": "Live Nation Presale"
          },
          {
            "startDateTime": "2022-11-01T14:00:00Z",
            "endDateTime": "2022-11-04T02:00:00Z",
            "name": "VIP Packages Presale"
          },
          {
            "startDateTime": "2022-11-03T14:00:00Z",
            "endDateTime": "2022-11-04T02:00:00Z",
            "name": "HOB Foundation Room Member Presale"
          },
          {
            "startDateTime": "2022-11-04T14:00:00Z",
            "endDateTime": "2023-06-11T21:00:00Z",
            "name": "Citi® Cardmember Preferred Tickets"
          },
          {
            "startDateTime": "2022-11-03T14:00:00Z",
            "endDateTime": "2022-11-04T02:00:00Z",
            "name": "Xfinity Sponsor Presale"
          },
          {
            "startDateTime": "2022-11-04T14:00:00Z",
            "endDateTime": "2023-06-25T21:00:00Z",
            "name": "VIP Packages Onsale"
          },
          {
            "startDateTime": "2022-11-01T14:00:00Z",
            "endDateTime": "2023-07-10T00:30:00Z",
            "name": "Official Platinum"
          },
          {
            "startDateTime": "2023-02-22T15:00:00Z",
            "endDateTime": "2023-02-27T03:00:00Z",
            "name": "Season Ticket Holder Onsale"
          }
        ]
      },
      "dates": {
        "start": {
          "localDate": "2023-07-09",
          "localTime": "19:30:00",
          "dateTime": "2023-07-09T23:30:00Z",
          "dateTBD": false,
          "dateTBA": false,
          "timeTBA": false,
          "noSpecificTime": false
        },
        "timezone": "America/New_York",
        "status": { "code": "onsale" },
        "spanMultipleDays": false
      },
      "classifications": [
        {
          "primary": true,
          "segment": { "id": "KZFzniwnSyZfZ7v7nJ", "name": "Music" },
          "genre": { "id": "KnvZfZ7vAv6", "name": "Country" },
          "subGenre": { "id": "KZazBEonSMnZfZ7vAFa", "name": "Country" },
          "type": { "id": "KZAyXgnZfZ7v7nI", "name": "Undefined" },
          "subType": { "id": "KZFzBErXgnZfZ7v7lJ", "name": "Undefined" },
          "family": false
        }
      ],
      "promoter": {
        "id": "653",
        "name": "LIVE NATION MUSIC",
        "description": "LIVE NATION MUSIC / NTL / USA"
      },
      "promoters": [
        {
          "id": "653",
          "name": "LIVE NATION MUSIC",
          "description": "LIVE NATION MUSIC / NTL / USA"
        }
      ],
      "pleaseNote": "This event takes place rain or shine.",
      "priceRanges": [
        { "type": "standard", "currency": "USD", "min": 61.0, "max": 251.0 }
      ],
      "products": [
        {
          "name": "Xfinity Center Parking: Shania Twain",
          "id": "vvG17Z94E-q4YC",
          "url": "http://concerts.livenation.com/event/01005D59E1755C0E",
          "type": "Parking",
          "classifications": [
            {
              "primary": true,
              "segment": {
                "id": "KZFzniwnSyZfZ7v7n1",
                "name": "Miscellaneous"
              },
              "genre": { "id": "KnvZfZ7v7ll", "name": "Undefined" },
              "subGenre": {
                "id": "KZazBEonSMnZfZ7vAv1",
                "name": "Undefined"
              },
              "type": { "id": "KZAyXgnZfZ7vAva", "name": "Parking" },
              "subType": { "id": "KZFzBErXgnZfZ7vAFk", "name": "Premier" },
              "family": false
            }
          ]
        },
        {
          "name": "Live Nation Blanket Purchase: Shania Twain",
          "id": "vvG17Z94ELjAcW",
          "url": "http://concerts.livenation.com/event/01005D59DF705B7D",
          "type": "Merchandise Voucher",
          "classifications": [
            {
              "primary": true,
              "segment": {
                "id": "KZFzniwnSyZfZ7v7n1",
                "name": "Miscellaneous"
              },
              "genre": { "id": "KnvZfZ7v7ll", "name": "Undefined" },
              "subGenre": {
                "id": "KZazBEonSMnZfZ7vAv1",
                "name": "Undefined"
              },
              "type": { "id": "KZAyXgnZfZ7v7nJ", "name": "Upsell" },
              "subType": {
                "id": "KZFzBErXgnZfZ7vAke",
                "name": "Merchandise Voucher"
              },
              "family": false
            }
          ]
        },
        {
          "name": "Fast Lane Access - NOT A CONCERT TICKET: Shania Twain",
          "id": "vvG17Z94Ercgiu",
          "url": "http://concerts.livenation.com/event/01005D59DEB75B0D",
          "type": "Special Entry",
          "classifications": [
            {
              "primary": true,
              "segment": {
                "id": "KZFzniwnSyZfZ7v7n1",
                "name": "Miscellaneous"
              },
              "genre": { "id": "KnvZfZ7v7ll", "name": "Undefined" },
              "subGenre": {
                "id": "KZazBEonSMnZfZ7vAv1",
                "name": "Undefined"
              },
              "type": { "id": "KZAyXgnZfZ7v7nJ", "name": "Upsell" },
              "subType": {
                "id": "KZFzBErXgnZfZ7v7lv",
                "name": "Special Entry"
              },
              "family": false
            }
          ]
        },
        {
          "name": "Xfinity VIP Club Access: Shania Twain",
          "id": "vvG17Z94Erdgnw",
          "url": "http://concerts.livenation.com/event/01005D59DE0F5AB2",
          "type": "Club Access",
          "classifications": [
            {
              "primary": true,
              "segment": {
                "id": "KZFzniwnSyZfZ7v7n1",
                "name": "Miscellaneous"
              },
              "genre": { "id": "KnvZfZ7v7ll", "name": "Undefined" },
              "subGenre": {
                "id": "KZazBEonSMnZfZ7vAv1",
                "name": "Undefined"
              },
              "type": { "id": "KZAyXgnZfZ7v7nJ", "name": "Upsell" },
              "subType": {
                "id": "KZFzBErXgnZfZ7vAFJ",
                "name": "VIP Club Access"
              },
              "family": false
            }
          ]
        },
        {
          "name": "Lawn Chair Rental: Shania Twain",
          "id": "vvG17Z94Exp4gI",
          "url": "http://concerts.livenation.com/event/01005D59E2595D68",
          "type": "Merchandise Voucher",
          "classifications": [
            {
              "primary": true,
              "segment": {
                "id": "KZFzniwnSyZfZ7v7n1",
                "name": "Miscellaneous"
              },
              "genre": { "id": "KnvZfZ7v7ll", "name": "Undefined" },
              "subGenre": {
                "id": "KZazBEonSMnZfZ7vAv1",
                "name": "Undefined"
              },
              "type": { "id": "KZAyXgnZfZ7v7nJ", "name": "Upsell" },
              "subType": {
                "id": "KZFzBErXgnZfZ7vAF1",
                "name": "Lawn Chair Rental"
              },
              "family": false
            }
          ]
        },
        {
          "name": "Shania Twain - Upgrades & Extras",
          "id": "vvG17Z9ImTGd4o",
          "url": "http://concerts.livenation.com/event/01005E8BBF303551",
          "type": "Upsell Shell Event",
          "classifications": [
            {
              "primary": true,
              "segment": { "id": "KZFzniwnSyZfZ7v7nJ", "name": "Music" },
              "genre": { "id": "KnvZfZ7vAv6", "name": "Country" },
              "subGenre": { "id": "KZazBEonSMnZfZ7vAFa", "name": "Country" },
              "type": { "id": "KZAyXgnZfZ7v7nI", "name": "Undefined" },
              "subType": { "id": "KZFzBErXgnZfZ7v7lJ", "name": "Undefined" },
              "family": false
            }
          ]
        }
      ],
      "seatmap": {
        "staticUrl": "https://maps.ticketmaster.com/maps/geometry/3/event/01005D59DB4B5899/staticImage?type=png&systemId=HOST"
      },
      "accessibility": { "ticketLimit": 20 },
      "ticketLimit": {
        "info": "There is an overall 8 ticket limit for this event."
      },
      "ageRestrictions": { "legalAgeEnforced": false },
      "ticketing": {
        "safeTix": { "enabled": true },
        "allInclusivePricing": { "enabled": false }
      },
      "_links": {
        "self": {
          "href": "/discovery/v2/events/vvG17Z94Eh3gx_?locale=en-us"
        },
        "attractions": [
          { "href": "/discovery/v2/attractions/K8vZ91719n0?locale=en-us" },
          { "href": "/discovery/v2/attractions/K8vZ917_bOf?locale=en-us" }
        ],
        "venues": [
          { "href": "/discovery/v2/venues/KovZpZAEAElA?locale=en-us" }
        ]
      },
      "_embedded": {
        "venues": [
          {
            "name": "Xfinity Center",
            "type": "venue",
            "id": "KovZpZAEAElA",
            "test": false,
            "url": "https://www.ticketmaster.com/xfinity-center-tickets-mansfield/venue/8213",
            "locale": "en-us",
            "images": [
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dbimages/21865v.jpg",
                "width": 205,
                "height": 115,
                "fallback": false
              }
            ],
            "postalCode": "02048",
            "timezone": "America/New_York",
            "city": { "name": "Mansfield" },
            "state": { "name": "Massachusetts", "stateCode": "MA" },
            "country": {
              "name": "United States Of America",
              "countryCode": "US"
            },
            "address": { "line1": "885 S Main St" },
            "location": {
              "longitude": "-71.220253",
              "latitude": "41.99243664"
            },
            "markets": [
              { "name": "Boston", "id": "11" },
              { "name": "New England", "id": "33" },
              { "name": "Connecticut", "id": "124" }
            ],
            "dmas": [
              { "id": 225 },
              { "id": 235 },
              { "id": 238 },
              { "id": 296 },
              { "id": 361 },
              { "id": 363 },
              { "id": 364 },
              { "id": 392 }
            ],
            "boxOfficeInfo": {
              "phoneNumberDetail": "General Information#: (508)339-2331",
              "openHoursDetail": "For the safety of our employees and guests, the box office will be closed until further notice. Please keep checking back here for updates as to when we re-open. We appreciate your understanding.",
              "acceptedPaymentDetail": "Cash, MC, VISA, AMX, DISCOVER",
              "willCallDetail": "Will Call is available at the Box Office 2 hours prior to event."
            },
            "parkingDetail": "The Xfinity Center facility contains 16 parking lots providing ample parking for all ticket holders with no additional charge. Be assured that every effort is made to ensure a safe and speedy exit from the facility. ALL RECREATIONAL VEHICLES AND BUSSES MUST BE FILLED TO CAPACITY WITH PATRONS HOLDING VALID TICKETS. NO TRAILERS, COMMERCIAL TRUCKS, OR COMMERCIAL CATERING BUSINESSES ARE ALLOWED IN THE PARKING LOTS.",
            "generalInfo": {
              "generalRule": "Lawn chairs are not allowed. No tapes or laser pointers. No Weapons. Xfinity Center allows food in provided it fits into a one gallon bag (Soft Coolers Only!). One bag per person. Xfinity Center allowed one factory sealed bottle of water per person. There is no smoking in the reserved seating areas of the Xfinity Center. Camera Policy: Personal cameras are allowed in the venue. Flash photography, video and removable lens cameras are not permitted without venue approval. In order to provide the safest and most enjoyable experience for our guests, as well as to expedite the screening process for everyone, effective Aug 1, 2016 the Xfinity Center will no longer allow bags to enter the venue. The only exceptions to this rule are the following: � A clear plastic or vinyl bag measuring no more than 12�x12�x6� � A small clutch approximately the size of a hand, with or without a strap � 1 gallon clear plastic bag with for food � An exception will also be made for medically necessary items after proper inspection",
              "childRule": "Call box office for specific information: (508) 339-2333."
            },
            "upcomingEvents": {
              "ticketmaster": 30,
              "_total": 30,
              "_filtered": 0
            },
            "_links": {
              "self": {
                "href": "/discovery/v2/venues/KovZpZAEAElA?locale=en-us"
              }
            }
          }
        ],
        "attractions": [
          {
            "name": "Shania Twain",
            "type": "attraction",
            "id": "K8vZ91719n0",
            "test": false,
            "url": "https://www.livenation.com/artist/K8vZ91719n0/shania-twain-events",
            "locale": "en-us",
            "externalLinks": {
              "youtube": [
                { "url": "https://www.youtube.com/user/ShaniaTwain" }
              ],
              "twitter": [{ "url": "https://twitter.com/FollowShania" }],
              "itunes": [
                {
                  "url": "https://music.apple.com/us/artist/shania-twain/129974"
                }
              ],
              "lastfm": [{ "url": "http://www.last.fm/music/Shania+Twain" }],
              "facebook": [{ "url": "https://www.facebook.com/ShaniaTwain" }],
              "wiki": [
                { "url": "https://en.wikipedia.org/wiki/Shania_Twain" }
              ],
              "spotify": [
                {
                  "url": "https://open.spotify.com/artist/5e4Dhzv426EvQe3aDb64jL"
                }
              ],
              "musicbrainz": [
                { "id": "faabb55d-3c9e-4c23-8779-732ac2ee2c0d" }
              ],
              "instagram": [
                { "url": "https://www.instagram.com/shaniatwain/" }
              ],
              "homepage": [{ "url": "http://www.shaniatwain.com/" }]
            },
            "aliases": ["shaina twain", "shania twain", "shinia twain"],
            "images": [
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_RETINA_PORTRAIT_3_2.jpg",
                "width": 640,
                "height": 427,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_EVENT_DETAIL_PAGE_16_9.jpg",
                "width": 205,
                "height": 115,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_RETINA_LANDSCAPE_16_9.jpg",
                "width": 1136,
                "height": 639,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_TABLET_LANDSCAPE_16_9.jpg",
                "width": 1024,
                "height": 576,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_RECOMENDATION_16_9.jpg",
                "width": 100,
                "height": 56,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_TABLET_LANDSCAPE_3_2.jpg",
                "width": 1024,
                "height": 683,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                "width": 2048,
                "height": 1152,
                "fallback": false
              },
              {
                "ratio": "4_3",
                "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_CUSTOM.jpg",
                "width": 305,
                "height": 225,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_RETINA_PORTRAIT_16_9.jpg",
                "width": 640,
                "height": 360,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_ARTIST_PAGE_3_2.jpg",
                "width": 305,
                "height": 203,
                "fallback": false
              }
            ],
            "classifications": [
              {
                "primary": true,
                "segment": { "id": "KZFzniwnSyZfZ7v7nJ", "name": "Music" },
                "genre": { "id": "KnvZfZ7vAv6", "name": "Country" },
                "subGenre": {
                  "id": "KZazBEonSMnZfZ7vAFa",
                  "name": "Country"
                },
                "type": { "id": "KZAyXgnZfZ7v7nI", "name": "Undefined" },
                "subType": {
                  "id": "KZFzBErXgnZfZ7v7lJ",
                  "name": "Undefined"
                },
                "family": false
              }
            ],
            "upcomingEvents": {
              "tmr": 1,
              "ticketmaster": 44,
              "_total": 45,
              "_filtered": 0
            },
            "_links": {
              "self": {
                "href": "/discovery/v2/attractions/K8vZ91719n0?locale=en-us"
              }
            }
          },
          {
            "name": "BRELAND",
            "type": "attraction",
            "id": "K8vZ917_bOf",
            "test": false,
            "url": "https://www.livenation.com/artist/K8vZ917_bOf/breland-events",
            "locale": "en-us",
            "externalLinks": {
              "spotify": [
                {
                  "url": "https://open.spotify.com/artist/0C86lmpnwiyLDUiyo4d0P1?si=rZ0xqBgXRcCK-hEBAoE4mg"
                }
              ],
              "facebook": [
                { "url": "https://www.facebook.com/brelandthepenpointguard/" }
              ],
              "instagram": [
                { "url": "https://www.instagram.com/breland/?hl=en" }
              ],
              "homepage": [{ "url": "https://www.brelandmusic.com/" }]
            },
            "images": [
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/e74/83efc299-69c1-4170-95a5-8f1a633b0e74_TABLET_LANDSCAPE_16_9.jpg",
                "width": 1024,
                "height": 576,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/e74/83efc299-69c1-4170-95a5-8f1a633b0e74_RECOMENDATION_16_9.jpg",
                "width": 100,
                "height": 56,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/e74/83efc299-69c1-4170-95a5-8f1a633b0e74_RETINA_LANDSCAPE_16_9.jpg",
                "width": 1136,
                "height": 639,
                "fallback": false
              },
              {
                "ratio": "4_3",
                "url": "https://s1.ticketm.net/dam/a/e74/83efc299-69c1-4170-95a5-8f1a633b0e74_CUSTOM.jpg",
                "width": 305,
                "height": 225,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/e74/83efc299-69c1-4170-95a5-8f1a633b0e74_ARTIST_PAGE_3_2.jpg",
                "width": 305,
                "height": 203,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/e74/83efc299-69c1-4170-95a5-8f1a633b0e74_EVENT_DETAIL_PAGE_16_9.jpg",
                "width": 205,
                "height": 115,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/e74/83efc299-69c1-4170-95a5-8f1a633b0e74_TABLET_LANDSCAPE_3_2.jpg",
                "width": 1024,
                "height": 683,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/e74/83efc299-69c1-4170-95a5-8f1a633b0e74_SOURCE",
                "width": 2426,
                "height": 1365,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/e74/83efc299-69c1-4170-95a5-8f1a633b0e74_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                "width": 2048,
                "height": 1152,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/e74/83efc299-69c1-4170-95a5-8f1a633b0e74_RETINA_PORTRAIT_3_2.jpg",
                "width": 640,
                "height": 427,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/e74/83efc299-69c1-4170-95a5-8f1a633b0e74_RETINA_PORTRAIT_16_9.jpg",
                "width": 640,
                "height": 360,
                "fallback": false
              }
            ],
            "classifications": [
              {
                "primary": true,
                "segment": { "id": "KZFzniwnSyZfZ7v7nJ", "name": "Music" },
                "genre": { "id": "KnvZfZ7vAv6", "name": "Country" },
                "subGenre": {
                  "id": "KZazBEonSMnZfZ7vAaA",
                  "name": "Country Pop"
                },
                "type": { "id": "KZAyXgnZfZ7v7la", "name": "Individual" },
                "subType": { "id": "KZFzBErXgnZfZ7vAd7", "name": "Musician" },
                "family": false
              }
            ],
            "upcomingEvents": {
              "mfx-dk": 1,
              "ticketmaster": 19,
              "mfx-no": 1,
              "_total": 21,
              "_filtered": 0
            },
            "_links": {
              "self": {
                "href": "/discovery/v2/attractions/K8vZ917_bOf?locale=en-us"
              }
            }
          }
        ]
      }
    },
    {
      "name": "Shania Twain: Queen Of Me Tour",
      "type": "event",
      "id": "G5dIZ94Jdxopv",
      "test": false,
      "url": "https://concerts.livenation.com/shania-twain-queen-of-me-tour-woodlands-texas-07-22-2023/event/3A005D5983891581",
      "locale": "en-us",
      "images": [
        {
          "ratio": "3_2",
          "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_RETINA_PORTRAIT_3_2.jpg",
          "width": 640,
          "height": 427,
          "fallback": false
        },
        {
          "ratio": "16_9",
          "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_EVENT_DETAIL_PAGE_16_9.jpg",
          "width": 205,
          "height": 115,
          "fallback": false
        },
        {
          "ratio": "16_9",
          "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_RETINA_LANDSCAPE_16_9.jpg",
          "width": 1136,
          "height": 639,
          "fallback": false
        },
        {
          "ratio": "16_9",
          "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_TABLET_LANDSCAPE_16_9.jpg",
          "width": 1024,
          "height": 576,
          "fallback": false
        },
        {
          "ratio": "16_9",
          "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_RECOMENDATION_16_9.jpg",
          "width": 100,
          "height": 56,
          "fallback": false
        },
        {
          "ratio": "3_2",
          "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_TABLET_LANDSCAPE_3_2.jpg",
          "width": 1024,
          "height": 683,
          "fallback": false
        },
        {
          "ratio": "16_9",
          "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_TABLET_LANDSCAPE_LARGE_16_9.jpg",
          "width": 2048,
          "height": 1152,
          "fallback": false
        },
        {
          "ratio": "4_3",
          "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_CUSTOM.jpg",
          "width": 305,
          "height": 225,
          "fallback": false
        },
        {
          "ratio": "16_9",
          "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_RETINA_PORTRAIT_16_9.jpg",
          "width": 640,
          "height": 360,
          "fallback": false
        },
        {
          "ratio": "3_2",
          "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_ARTIST_PAGE_3_2.jpg",
          "width": 305,
          "height": 203,
          "fallback": false
        }
      ],
      "sales": {
        "public": {
          "startDateTime": "2022-11-04T15:00:00Z",
          "startTBD": false,
          "startTBA": false,
          "endDateTime": "2023-07-23T02:30:00Z"
        },
        "presales": [
          {
            "startDateTime": "2022-11-03T15:00:00Z",
            "endDateTime": "2022-11-04T03:00:00Z",
            "name": "Live Nation Presale"
          },
          {
            "startDateTime": "2022-11-03T15:00:00Z",
            "endDateTime": "2022-11-04T03:00:00Z",
            "name": "Venue Presale"
          },
          {
            "startDateTime": "2022-11-01T15:00:00Z",
            "endDateTime": "2022-11-04T03:00:00Z",
            "name": "Citi® Cardmember Presale"
          },
          {
            "startDateTime": "2022-11-04T15:00:00Z",
            "endDateTime": "2023-06-24T22:00:00Z",
            "name": "Citi® Cardmember Preferred"
          },
          {
            "startDateTime": "2022-11-03T15:00:00Z",
            "endDateTime": "2022-11-04T03:00:00Z",
            "name": "Woodforrest Presale"
          },
          {
            "startDateTime": "2022-11-01T15:00:00Z",
            "endDateTime": "2022-11-03T03:00:00Z",
            "name": "Citi® Cardmember Aisle Presale"
          },
          {
            "startDateTime": "2022-11-01T15:00:00Z",
            "endDateTime": "2022-11-04T03:00:00Z",
            "name": "VIP Packages Presale"
          },
          {
            "startDateTime": "2022-11-03T15:00:00Z",
            "endDateTime": "2022-11-04T03:00:00Z",
            "name": "Aisle Seat Presale"
          },
          {
            "startDateTime": "2022-11-04T15:00:00Z",
            "endDateTime": "2023-07-08T22:00:00Z",
            "name": "VIP Package Onsale"
          },
          {
            "startDateTime": "2022-11-01T15:00:00Z",
            "endDateTime": "2023-07-23T02:30:00Z",
            "name": "Official Platinum"
          }
        ]
      },
      "dates": {
        "start": {
          "localDate": "2023-07-22",
          "localTime": "19:30:00",
          "dateTime": "2023-07-23T00:30:00Z",
          "dateTBD": false,
          "dateTBA": false,
          "timeTBA": false,
          "noSpecificTime": false
        },
        "timezone": "America/Chicago",
        "status": { "code": "onsale" },
        "spanMultipleDays": false
      },
      "classifications": [
        {
          "primary": true,
          "segment": { "id": "KZFzniwnSyZfZ7v7nJ", "name": "Music" },
          "genre": { "id": "KnvZfZ7vAv6", "name": "Country" },
          "subGenre": { "id": "KZazBEonSMnZfZ7vAFa", "name": "Country" },
          "type": { "id": "KZAyXgnZfZ7v7nI", "name": "Undefined" },
          "subType": { "id": "KZFzBErXgnZfZ7v7lJ", "name": "Undefined" },
          "family": false
        }
      ],
      "promoter": {
        "id": "653",
        "name": "LIVE NATION MUSIC",
        "description": "LIVE NATION MUSIC / NTL / USA"
      },
      "promoters": [
        {
          "id": "653",
          "name": "LIVE NATION MUSIC",
          "description": "LIVE NATION MUSIC / NTL / USA"
        }
      ],
      "info": "There is a STRICT bag size requirement for this show. All bags and purses (unless clear) must be smaller than 4.5 inches x 6.5 inches. Clear bags must be smaller than 12 inches x 12 inches. For more information, visit www.woodlandscenter.org.",
      "pleaseNote": "There is a STRICT bag size requirement for this show. All bags and purses (unless clear) must be smaller than 4.5 inches x 6.5 inches. Clear bags must be smaller than 12 inches x 12 inches. For more information, visit www.woodlandscenter.org.",
      "priceRanges": [
        { "type": "standard", "currency": "USD", "min": 55.95, "max": 255.95 }
      ],
      "products": [
        {
          "name": "Shania Twain - Garage Parking",
          "id": "G5dIZ9p24oVRF",
          "url": "http://concerts.livenation.com/event/3A005D63D5474BC8",
          "type": "Parking",
          "classifications": [
            {
              "primary": true,
              "segment": {
                "id": "KZFzniwnSyZfZ7v7n1",
                "name": "Miscellaneous"
              },
              "genre": { "id": "KnvZfZ7v7ll", "name": "Undefined" },
              "subGenre": {
                "id": "KZazBEonSMnZfZ7vAv1",
                "name": "Undefined"
              },
              "type": { "id": "KZAyXgnZfZ7vAva", "name": "Parking" },
              "subType": { "id": "KZFzBErXgnZfZ7vAFe", "name": "Regular" },
              "family": false
            }
          ]
        },
        {
          "name": "Shania Twain - Lawn Chair Rental",
          "id": "G5dIZ9p2jK7X1",
          "url": "http://concerts.livenation.com/event/3A005D63DC4C4F8A",
          "type": "Special Entry",
          "classifications": [
            {
              "primary": true,
              "segment": {
                "id": "KZFzniwnSyZfZ7v7n1",
                "name": "Miscellaneous"
              },
              "genre": { "id": "KnvZfZ7v7ll", "name": "Undefined" },
              "subGenre": {
                "id": "KZazBEonSMnZfZ7vAv1",
                "name": "Undefined"
              },
              "type": { "id": "KZAyXgnZfZ7v7nJ", "name": "Upsell" },
              "subType": {
                "id": "KZFzBErXgnZfZ7v7lv",
                "name": "Special Entry"
              },
              "family": false
            }
          ]
        },
        {
          "name": "Shania Twain CD",
          "id": "G5dIZ9pJndK-K",
          "url": "http://concerts.livenation.com/event/3A005D69AA0D3853",
          "type": "Upsell",
          "classifications": [
            {
              "primary": true,
              "segment": {
                "id": "KZFzniwnSyZfZ7v7n1",
                "name": "Miscellaneous"
              },
              "genre": { "id": "KnvZfZ7v7ll", "name": "Undefined" },
              "subGenre": {
                "id": "KZazBEonSMnZfZ7vAv1",
                "name": "Undefined"
              },
              "type": { "id": "KZAyXgnZfZ7v7nJ", "name": "Upsell" },
              "subType": { "id": "KZFzBErXgnZfZ7vAkd", "name": "CD" },
              "family": false
            }
          ]
        }
      ],
      "seatmap": {
        "staticUrl": "https://maps.ticketmaster.com/maps/geometry/3/event/3A005D5983891581/staticImage?type=png&systemId=HOST"
      },
      "accessibility": {
        "info": "Seating - Accessible seating in various sections of the seating area and at various prices for guests with mobility impairments. Seating near the stage is available for guests with visual or hearing impairments.  Limited Mobility seating does not have wheelchair access.",
        "ticketLimit": 4,
        "url": "http://www.woodlandscenter.org/disabilities.html",
        "urlText": "GUESTS WITH DISABILITIES"
      },
      "ticketLimit": {
        "info": "There is an overall 8 ticket limit on this event."
      },
      "ageRestrictions": { "legalAgeEnforced": false },
      "ticketing": {
        "safeTix": { "enabled": true },
        "allInclusivePricing": { "enabled": false }
      },
      "_links": {
        "self": { "href": "/discovery/v2/events/G5dIZ94Jdxopv?locale=en-us" },
        "attractions": [
          { "href": "/discovery/v2/attractions/K8vZ91719n0?locale=en-us" },
          { "href": "/discovery/v2/attractions/K8vZ91730MV?locale=en-us" }
        ],
        "venues": [
          { "href": "/discovery/v2/venues/KovZpZAE6k6A?locale=en-us" }
        ]
      },
      "_embedded": {
        "venues": [
          {
            "name": "The Cynthia Woods Mitchell Pavilion presented by Huntsman",
            "type": "venue",
            "id": "KovZpZAE6k6A",
            "test": false,
            "url": "https://www.ticketmaster.com/the-cynthia-woods-mitchell-pavilion-presented-tickets-woodlands/venue/475245",
            "locale": "en-us",
            "aliases": [
              "cynthia woods mitchell pavilion",
              "woodlands pavilion",
              "woodland pavilion",
              "woodland pavillion",
              "woodlands pavillion",
              "the cynthia woods mitchell pavilion",
              "the woodlands pavilion",
              "the woodlands"
            ],
            "images": [
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dbimages/22407v.jpg",
                "width": 640,
                "height": 360,
                "fallback": false
              }
            ],
            "postalCode": "77380",
            "timezone": "America/Chicago",
            "city": { "name": "Woodlands" },
            "state": { "name": "Texas", "stateCode": "TX" },
            "country": {
              "name": "United States Of America",
              "countryCode": "US"
            },
            "address": { "line1": "2005 Lake Robbins Dr" },
            "location": {
              "longitude": "-95.46435087",
              "latitude": "30.16190839"
            },
            "markets": [
              { "name": "Houston and More", "id": "22" },
              { "name": "Beaumont", "id": "123" }
            ],
            "dmas": [{ "id": 227 }, { "id": 300 }, { "id": 408 }],
            "social": { "twitter": { "handle": "@thepavilion_tx" } },
            "boxOfficeInfo": {
              "phoneNumberDetail": "Event related questions may be handled by Ticketmaster phone agents and ticket center sellers. Group sales for 20 or more are available on most performing arts events through 281-364-3010. Contemporary rock/pop/etc events do NOT allow group purchases.",
              "openHoursDetail": "10am-5pm Mon-Fri (Closed on Saturdays unless it is an event day.) 10am-Intermission (Monday-Saturday Event Days) 12noon-Intermission (Sunday Event Days - for doors at Noon the box office will open at 10am )",
              "acceptedPaymentDetail": "Cash, MasterCard, Visa, American Express and Discover",
              "willCallDetail": "Customers may pick up their tickets 48 hours after ordering. They must present a photo ID, the credit card used in the purchase, and their confirmation number. The box office is located at the North entrance."
            },
            "parkingDetail": "Prepaid Preferred Parking in the Gold Lot Parking Garage off Six Pines South is available from Ticketmaster by phone at 800-745-3000 or www.ticketmaster.com (these parking passes go OFF sale by phone/online 10 days before show date) or at any Ticketmaster Ticket Center including select, Walmart, Fiesta, and HEB stores until the day of the show, subject to availability. There is no free accessible parking in the garage. Free accessible parking is available on a 1st come basis in the adjacent gold lot with accessible plates or placards. Free Parking is available within walking distance to the facility off of Grogans Mill Rd. and Timberloch Pl. For sold out performances parking could be limited.",
            "accessibleSeatingDetail": "Special seating is available for guests with disabilities. Visit the venue's official website for additional information: https/www.woodlandscenter.org/disabilities.html",
            "generalInfo": {
              "generalRule": "No Laser Pointers, Bottles, Strollers, Lawn Chairs, Cameras, Recorders, Cans, Beverages, Coolers, Weapons or stadium chairs allowed inside. Customers may bring beach towels, pillows, umbrellas, or binoculars. Some performers may have different restrictions. FOOD is now permitted into the venue at all events. At contemporary events, each guest is permitted to bring in a one gallon plastic bag of food for personal consumption. At performing arts events (symphony, ballet, opera, etc), guests also can bring in food, but are not limited to a one gallon plastic bag. NO BEVERAGES CAN BE BROUGHT INTO THE VENUE AT ANY TIME!",
              "childRule": "Reserved seating - Child age 2 and under is free if seated in an adults lap. Children's performances 1 and under free. Lawn - Children 5 years of age and under are admitted free to the lawn."
            },
            "upcomingEvents": {
              "ticketmaster": 35,
              "_total": 35,
              "_filtered": 0
            },
            "_links": {
              "self": {
                "href": "/discovery/v2/venues/KovZpZAE6k6A?locale=en-us"
              }
            }
          }
        ],
        "attractions": [
          {
            "name": "Shania Twain",
            "type": "attraction",
            "id": "K8vZ91719n0",
            "test": false,
            "url": "https://www.livenation.com/artist/K8vZ91719n0/shania-twain-events",
            "locale": "en-us",
            "externalLinks": {
              "youtube": [
                { "url": "https://www.youtube.com/user/ShaniaTwain" }
              ],
              "twitter": [{ "url": "https://twitter.com/FollowShania" }],
              "itunes": [
                {
                  "url": "https://music.apple.com/us/artist/shania-twain/129974"
                }
              ],
              "lastfm": [{ "url": "http://www.last.fm/music/Shania+Twain" }],
              "facebook": [{ "url": "https://www.facebook.com/ShaniaTwain" }],
              "wiki": [
                { "url": "https://en.wikipedia.org/wiki/Shania_Twain" }
              ],
              "spotify": [
                {
                  "url": "https://open.spotify.com/artist/5e4Dhzv426EvQe3aDb64jL"
                }
              ],
              "musicbrainz": [
                { "id": "faabb55d-3c9e-4c23-8779-732ac2ee2c0d" }
              ],
              "instagram": [
                { "url": "https://www.instagram.com/shaniatwain/" }
              ],
              "homepage": [{ "url": "http://www.shaniatwain.com/" }]
            },
            "aliases": ["shaina twain", "shania twain", "shinia twain"],
            "images": [
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_RETINA_PORTRAIT_3_2.jpg",
                "width": 640,
                "height": 427,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_EVENT_DETAIL_PAGE_16_9.jpg",
                "width": 205,
                "height": 115,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_RETINA_LANDSCAPE_16_9.jpg",
                "width": 1136,
                "height": 639,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_TABLET_LANDSCAPE_16_9.jpg",
                "width": 1024,
                "height": 576,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_RECOMENDATION_16_9.jpg",
                "width": 100,
                "height": 56,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_TABLET_LANDSCAPE_3_2.jpg",
                "width": 1024,
                "height": 683,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                "width": 2048,
                "height": 1152,
                "fallback": false
              },
              {
                "ratio": "4_3",
                "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_CUSTOM.jpg",
                "width": 305,
                "height": 225,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_RETINA_PORTRAIT_16_9.jpg",
                "width": 640,
                "height": 360,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_ARTIST_PAGE_3_2.jpg",
                "width": 305,
                "height": 203,
                "fallback": false
              }
            ],
            "classifications": [
              {
                "primary": true,
                "segment": { "id": "KZFzniwnSyZfZ7v7nJ", "name": "Music" },
                "genre": { "id": "KnvZfZ7vAv6", "name": "Country" },
                "subGenre": {
                  "id": "KZazBEonSMnZfZ7vAFa",
                  "name": "Country"
                },
                "type": { "id": "KZAyXgnZfZ7v7nI", "name": "Undefined" },
                "subType": {
                  "id": "KZFzBErXgnZfZ7v7lJ",
                  "name": "Undefined"
                },
                "family": false
              }
            ],
            "upcomingEvents": {
              "tmr": 1,
              "ticketmaster": 44,
              "_total": 45,
              "_filtered": 0
            },
            "_links": {
              "self": {
                "href": "/discovery/v2/attractions/K8vZ91719n0?locale=en-us"
              }
            }
          },
          {
            "name": "Mickey Guyton",
            "type": "attraction",
            "id": "K8vZ91730MV",
            "test": false,
            "url": "https://www.livenation.com/artist/K8vZ91730MV/mickey-guyton-events",
            "locale": "en-us",
            "externalLinks": {
              "youtube": [
                { "url": "https://www.youtube.com/user/mickeyguyton" }
              ],
              "twitter": [{ "url": "https://twitter.com/mickeyguyton" }],
              "facebook": [
                { "url": "https://www.facebook.com/mickeyguyton" }
              ],
              "wiki": [
                { "url": "https://en.wikipedia.org/wiki/Mickey_Guyton" }
              ],
              "instagram": [{ "url": "http://instagram.com/mickeyguyton" }],
              "musicbrainz": [
                { "id": "77467723-5d0e-4293-a89b-d230f56eaf50" }
              ]
            },
            "images": [
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/260/4e37b9a0-5165-48be-a3bc-909953bb8260_1616081_EVENT_DETAIL_PAGE_16_9.jpg",
                "width": 205,
                "height": 115,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/260/4e37b9a0-5165-48be-a3bc-909953bb8260_1616081_ARTIST_PAGE_3_2.jpg",
                "width": 305,
                "height": 203,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/260/4e37b9a0-5165-48be-a3bc-909953bb8260_1616081_RETINA_LANDSCAPE_16_9.jpg",
                "width": 1136,
                "height": 639,
                "fallback": false
              },
              {
                "ratio": "4_3",
                "url": "https://s1.ticketm.net/dam/a/260/4e37b9a0-5165-48be-a3bc-909953bb8260_1616081_CUSTOM.jpg",
                "width": 305,
                "height": 225,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/260/4e37b9a0-5165-48be-a3bc-909953bb8260_1616081_TABLET_LANDSCAPE_16_9.jpg",
                "width": 1024,
                "height": 576,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/260/4e37b9a0-5165-48be-a3bc-909953bb8260_1616081_TABLET_LANDSCAPE_3_2.jpg",
                "width": 1024,
                "height": 683,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/260/4e37b9a0-5165-48be-a3bc-909953bb8260_1616081_RETINA_PORTRAIT_16_9.jpg",
                "width": 640,
                "height": 360,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/260/4e37b9a0-5165-48be-a3bc-909953bb8260_1616081_RETINA_PORTRAIT_3_2.jpg",
                "width": 640,
                "height": 427,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/260/4e37b9a0-5165-48be-a3bc-909953bb8260_1616081_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                "width": 2048,
                "height": 1152,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/260/4e37b9a0-5165-48be-a3bc-909953bb8260_1616081_RECOMENDATION_16_9.jpg",
                "width": 100,
                "height": 56,
                "fallback": false
              }
            ],
            "classifications": [
              {
                "primary": true,
                "segment": { "id": "KZFzniwnSyZfZ7v7nJ", "name": "Music" },
                "genre": { "id": "KnvZfZ7vAv6", "name": "Country" },
                "subGenre": {
                  "id": "KZazBEonSMnZfZ7vAFa",
                  "name": "Country"
                },
                "type": { "id": "KZAyXgnZfZ7v7nI", "name": "Undefined" },
                "subType": {
                  "id": "KZFzBErXgnZfZ7v7lJ",
                  "name": "Undefined"
                },
                "family": false
              }
            ],
            "upcomingEvents": {
              "ticketmaster": 3,
              "_total": 3,
              "_filtered": 0
            },
            "_links": {
              "self": {
                "href": "/discovery/v2/attractions/K8vZ91730MV?locale=en-us"
              }
            }
          }
        ]
      }
    },
    {
      "name": "Shania Twain: Queen Of Me Tour",
      "type": "event",
      "id": "vvG1bZ94nEt7qa",
      "test": false,
      "url": "https://www.ticketmaster.com/shania-twain-queen-of-me-tour-kansas-city-missouri-07-19-2023/event/06005D5AA7A44749",
      "locale": "en-us",
      "images": [
        {
          "ratio": "3_2",
          "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_RETINA_PORTRAIT_3_2.jpg",
          "width": 640,
          "height": 427,
          "fallback": false
        },
        {
          "ratio": "16_9",
          "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_EVENT_DETAIL_PAGE_16_9.jpg",
          "width": 205,
          "height": 115,
          "fallback": false
        },
        {
          "ratio": "16_9",
          "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_RETINA_LANDSCAPE_16_9.jpg",
          "width": 1136,
          "height": 639,
          "fallback": false
        },
        {
          "ratio": "16_9",
          "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_TABLET_LANDSCAPE_16_9.jpg",
          "width": 1024,
          "height": 576,
          "fallback": false
        },
        {
          "ratio": "16_9",
          "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_RECOMENDATION_16_9.jpg",
          "width": 100,
          "height": 56,
          "fallback": false
        },
        {
          "ratio": "3_2",
          "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_TABLET_LANDSCAPE_3_2.jpg",
          "width": 1024,
          "height": 683,
          "fallback": false
        },
        {
          "ratio": "16_9",
          "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_TABLET_LANDSCAPE_LARGE_16_9.jpg",
          "width": 2048,
          "height": 1152,
          "fallback": false
        },
        {
          "ratio": "4_3",
          "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_CUSTOM.jpg",
          "width": 305,
          "height": 225,
          "fallback": false
        },
        {
          "ratio": "16_9",
          "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_RETINA_PORTRAIT_16_9.jpg",
          "width": 640,
          "height": 360,
          "fallback": false
        },
        {
          "ratio": "3_2",
          "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_ARTIST_PAGE_3_2.jpg",
          "width": 305,
          "height": 203,
          "fallback": false
        }
      ],
      "sales": {
        "public": {
          "startDateTime": "2022-11-04T15:00:00Z",
          "startTBD": false,
          "startTBA": false,
          "endDateTime": "2023-07-20T01:30:00Z"
        },
        "presales": [
          {
            "startDateTime": "2022-11-03T15:00:00Z",
            "endDateTime": "2022-11-04T03:00:00Z",
            "name": "Aisle Seating Presale"
          },
          {
            "startDateTime": "2022-11-01T15:00:00Z",
            "endDateTime": "2022-11-04T03:00:00Z",
            "name": "Citi® Cardmember Presales"
          },
          {
            "startDateTime": "2022-11-03T15:00:00Z",
            "endDateTime": "2022-11-04T03:00:00Z",
            "name": "Live Nation Presale"
          },
          {
            "startDateTime": "2022-11-04T15:00:00Z",
            "endDateTime": "2023-06-21T22:00:00Z",
            "name": "Citi® Cardmember Preferred Tickets"
          },
          {
            "startDateTime": "2022-11-01T15:00:00Z",
            "endDateTime": "2022-11-04T03:00:00Z",
            "name": "VIP Packages Presale"
          },
          {
            "startDateTime": "2022-11-04T15:00:00Z",
            "endDateTime": "2023-07-05T22:00:00Z",
            "name": "VIP Packages Onsale"
          },
          {
            "startDateTime": "2022-11-01T15:00:00Z",
            "endDateTime": "2023-07-20T01:30:00Z",
            "name": "Official Platinum"
          }
        ]
      },
      "dates": {
        "start": {
          "localDate": "2023-07-19",
          "localTime": "19:30:00",
          "dateTime": "2023-07-20T00:30:00Z",
          "dateTBD": false,
          "dateTBA": false,
          "timeTBA": false,
          "noSpecificTime": false
        },
        "timezone": "America/Chicago",
        "status": { "code": "onsale" },
        "spanMultipleDays": false
      },
      "classifications": [
        {
          "primary": true,
          "segment": { "id": "KZFzniwnSyZfZ7v7nJ", "name": "Music" },
          "genre": { "id": "KnvZfZ7vAv6", "name": "Country" },
          "subGenre": { "id": "KZazBEonSMnZfZ7vAFa", "name": "Country" },
          "type": { "id": "KZAyXgnZfZ7v7nI", "name": "Undefined" },
          "subType": { "id": "KZFzBErXgnZfZ7v7lJ", "name": "Undefined" },
          "family": false
        }
      ],
      "promoter": {
        "id": "653",
        "name": "LIVE NATION MUSIC",
        "description": "LIVE NATION MUSIC / NTL / USA"
      },
      "promoters": [
        {
          "id": "653",
          "name": "LIVE NATION MUSIC",
          "description": "LIVE NATION MUSIC / NTL / USA"
        }
      ],
      "priceRanges": [
        { "type": "standard", "currency": "USD", "min": 36.95, "max": 216.95 }
      ],
      "products": [
        {
          "name": "Shania Twain CD",
          "id": "vvG1bZ9pJOrpud",
          "url": "https://www.ticketmaster.com/shania-twain-cd-kansas-city-missouri-07-19-2023/event/06005D69A0796343",
          "type": "Upsell",
          "classifications": [
            {
              "primary": true,
              "segment": {
                "id": "KZFzniwnSyZfZ7v7n1",
                "name": "Miscellaneous"
              },
              "genre": { "id": "KnvZfZ7v7ll", "name": "Undefined" },
              "subGenre": {
                "id": "KZazBEonSMnZfZ7vAv1",
                "name": "Undefined"
              },
              "type": { "id": "KZAyXgnZfZ7v7nJ", "name": "Upsell" },
              "subType": { "id": "KZFzBErXgnZfZ7vAkd", "name": "CD" },
              "family": false
            }
          ]
        }
      ],
      "seatmap": {
        "staticUrl": "https://maps.ticketmaster.com/maps/geometry/3/event/06005D5AA7A44749/staticImage?type=png&systemId=HOST"
      },
      "accessibility": { "ticketLimit": 8 },
      "ageRestrictions": { "legalAgeEnforced": false },
      "doorsTimes": {
        "localDate": "2023-07-19",
        "localTime": "18:00:00",
        "dateTime": "2023-07-19T23:00:00Z"
      },
      "ticketing": {
        "safeTix": { "enabled": true },
        "allInclusivePricing": { "enabled": false }
      },
      "_links": {
        "self": {
          "href": "/discovery/v2/events/vvG1bZ94nEt7qa?locale=en-us"
        },
        "attractions": [
          { "href": "/discovery/v2/attractions/K8vZ91719n0?locale=en-us" },
          { "href": "/discovery/v2/attractions/K8vZ91730MV?locale=en-us" }
        ],
        "venues": [
          { "href": "/discovery/v2/venues/KovZpZAE7eeA?locale=en-us" }
        ]
      },
      "_embedded": {
        "venues": [
          {
            "name": "T-Mobile Center",
            "type": "venue",
            "id": "KovZpZAE7eeA",
            "test": false,
            "url": "https://www.ticketmaster.com/tmobile-center-tickets-kansas-city/venue/50225",
            "locale": "en-us",
            "images": [
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dbimages/22332v.jpg",
                "width": 640,
                "height": 360,
                "fallback": false
              }
            ],
            "postalCode": "64106",
            "timezone": "America/Chicago",
            "city": { "name": "Kansas City" },
            "state": { "name": "Missouri", "stateCode": "MO" },
            "country": {
              "name": "United States Of America",
              "countryCode": "US"
            },
            "address": { "line1": "1407 Grand Blvd" },
            "location": {
              "longitude": "-94.5676009",
              "latitude": "39.1015411"
            },
            "markets": [
              { "name": "Kansas City and More", "id": "26" },
              { "name": "All of US", "id": "51" },
              { "name": "Springfield", "id": "53" }
            ],
            "dmas": [
              { "id": 200 },
              { "id": 309 },
              { "id": 311 },
              { "id": 375 },
              { "id": 399 },
              { "id": 414 }
            ],
            "boxOfficeInfo": {
              "phoneNumberDetail": "For more information please see the below FAQ link. https://www.t-mobilecenter.com/plan_your_visit/faqs_1",
              "openHoursDetail": "For more information please see the below FAQ link. https://www.t-mobilecenter.com/plan_your_visit/faqs_1",
              "acceptedPaymentDetail": "Cash, Visa, MasterCard, American Express",
              "willCallDetail": "For more information please see the below FAQ link. https://www.t-mobilecenter.com/plan_your_visit/faqs_1"
            },
            "parkingDetail": "For more information please see the below FAQ link. https://www.t-mobilecenter.com/plan_your_visit/faqs_1",
            "accessibleSeatingDetail": "For more information please see the below FAQ link. https://www.t-mobilecenter.com/plan_your_visit/faqs_1",
            "generalInfo": {
              "generalRule": "For more information please see the below FAQ link. https://www.t-mobilecenter.com/plan_your_visit/faqs_1",
              "childRule": "For more information please see the below FAQ link. https://www.t-mobilecenter.com/plan_your_visit/faqs_1"
            },
            "upcomingEvents": {
              "tmr": 8,
              "ticketmaster": 14,
              "_total": 22,
              "_filtered": 0
            },
            "_links": {
              "self": {
                "href": "/discovery/v2/venues/KovZpZAE7eeA?locale=en-us"
              }
            }
          }
        ],
        "attractions": [
          {
            "name": "Shania Twain",
            "type": "attraction",
            "id": "K8vZ91719n0",
            "test": false,
            "url": "https://www.ticketmaster.com/shania-twain-tickets/artist/764367",
            "locale": "en-us",
            "externalLinks": {
              "youtube": [
                { "url": "https://www.youtube.com/user/ShaniaTwain" }
              ],
              "twitter": [{ "url": "https://twitter.com/FollowShania" }],
              "itunes": [
                {
                  "url": "https://music.apple.com/us/artist/shania-twain/129974"
                }
              ],
              "lastfm": [{ "url": "http://www.last.fm/music/Shania+Twain" }],
              "facebook": [{ "url": "https://www.facebook.com/ShaniaTwain" }],
              "wiki": [
                { "url": "https://en.wikipedia.org/wiki/Shania_Twain" }
              ],
              "spotify": [
                {
                  "url": "https://open.spotify.com/artist/5e4Dhzv426EvQe3aDb64jL"
                }
              ],
              "musicbrainz": [
                { "id": "faabb55d-3c9e-4c23-8779-732ac2ee2c0d" }
              ],
              "instagram": [
                { "url": "https://www.instagram.com/shaniatwain/" }
              ],
              "homepage": [{ "url": "http://www.shaniatwain.com/" }]
            },
            "aliases": ["shaina twain", "shania twain", "shinia twain"],
            "images": [
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_RETINA_PORTRAIT_3_2.jpg",
                "width": 640,
                "height": 427,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_EVENT_DETAIL_PAGE_16_9.jpg",
                "width": 205,
                "height": 115,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_RETINA_LANDSCAPE_16_9.jpg",
                "width": 1136,
                "height": 639,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_TABLET_LANDSCAPE_16_9.jpg",
                "width": 1024,
                "height": 576,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_RECOMENDATION_16_9.jpg",
                "width": 100,
                "height": 56,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_TABLET_LANDSCAPE_3_2.jpg",
                "width": 1024,
                "height": 683,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                "width": 2048,
                "height": 1152,
                "fallback": false
              },
              {
                "ratio": "4_3",
                "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_CUSTOM.jpg",
                "width": 305,
                "height": 225,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_RETINA_PORTRAIT_16_9.jpg",
                "width": 640,
                "height": 360,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_ARTIST_PAGE_3_2.jpg",
                "width": 305,
                "height": 203,
                "fallback": false
              }
            ],
            "classifications": [
              {
                "primary": true,
                "segment": { "id": "KZFzniwnSyZfZ7v7nJ", "name": "Music" },
                "genre": { "id": "KnvZfZ7vAv6", "name": "Country" },
                "subGenre": {
                  "id": "KZazBEonSMnZfZ7vAFa",
                  "name": "Country"
                },
                "type": { "id": "KZAyXgnZfZ7v7nI", "name": "Undefined" },
                "subType": {
                  "id": "KZFzBErXgnZfZ7v7lJ",
                  "name": "Undefined"
                },
                "family": false
              }
            ],
            "upcomingEvents": {
              "tmr": 1,
              "ticketmaster": 44,
              "_total": 45,
              "_filtered": 0
            },
            "_links": {
              "self": {
                "href": "/discovery/v2/attractions/K8vZ91719n0?locale=en-us"
              }
            }
          },
          {
            "name": "Mickey Guyton",
            "type": "attraction",
            "id": "K8vZ91730MV",
            "test": false,
            "url": "https://www.ticketmaster.com/mickey-guyton-tickets/artist/1963173",
            "locale": "en-us",
            "externalLinks": {
              "youtube": [
                { "url": "https://www.youtube.com/user/mickeyguyton" }
              ],
              "twitter": [{ "url": "https://twitter.com/mickeyguyton" }],
              "facebook": [
                { "url": "https://www.facebook.com/mickeyguyton" }
              ],
              "wiki": [
                { "url": "https://en.wikipedia.org/wiki/Mickey_Guyton" }
              ],
              "instagram": [{ "url": "http://instagram.com/mickeyguyton" }],
              "musicbrainz": [
                { "id": "77467723-5d0e-4293-a89b-d230f56eaf50" }
              ]
            },
            "images": [
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/260/4e37b9a0-5165-48be-a3bc-909953bb8260_1616081_EVENT_DETAIL_PAGE_16_9.jpg",
                "width": 205,
                "height": 115,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/260/4e37b9a0-5165-48be-a3bc-909953bb8260_1616081_ARTIST_PAGE_3_2.jpg",
                "width": 305,
                "height": 203,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/260/4e37b9a0-5165-48be-a3bc-909953bb8260_1616081_RETINA_LANDSCAPE_16_9.jpg",
                "width": 1136,
                "height": 639,
                "fallback": false
              },
              {
                "ratio": "4_3",
                "url": "https://s1.ticketm.net/dam/a/260/4e37b9a0-5165-48be-a3bc-909953bb8260_1616081_CUSTOM.jpg",
                "width": 305,
                "height": 225,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/260/4e37b9a0-5165-48be-a3bc-909953bb8260_1616081_TABLET_LANDSCAPE_16_9.jpg",
                "width": 1024,
                "height": 576,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/260/4e37b9a0-5165-48be-a3bc-909953bb8260_1616081_TABLET_LANDSCAPE_3_2.jpg",
                "width": 1024,
                "height": 683,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/260/4e37b9a0-5165-48be-a3bc-909953bb8260_1616081_RETINA_PORTRAIT_16_9.jpg",
                "width": 640,
                "height": 360,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/260/4e37b9a0-5165-48be-a3bc-909953bb8260_1616081_RETINA_PORTRAIT_3_2.jpg",
                "width": 640,
                "height": 427,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/260/4e37b9a0-5165-48be-a3bc-909953bb8260_1616081_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                "width": 2048,
                "height": 1152,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/260/4e37b9a0-5165-48be-a3bc-909953bb8260_1616081_RECOMENDATION_16_9.jpg",
                "width": 100,
                "height": 56,
                "fallback": false
              }
            ],
            "classifications": [
              {
                "primary": true,
                "segment": { "id": "KZFzniwnSyZfZ7v7nJ", "name": "Music" },
                "genre": { "id": "KnvZfZ7vAv6", "name": "Country" },
                "subGenre": {
                  "id": "KZazBEonSMnZfZ7vAFa",
                  "name": "Country"
                },
                "type": { "id": "KZAyXgnZfZ7v7nI", "name": "Undefined" },
                "subType": {
                  "id": "KZFzBErXgnZfZ7v7lJ",
                  "name": "Undefined"
                },
                "family": false
              }
            ],
            "upcomingEvents": {
              "ticketmaster": 3,
              "_total": 3,
              "_filtered": 0
            },
            "_links": {
              "self": {
                "href": "/discovery/v2/attractions/K8vZ91730MV?locale=en-us"
              }
            }
          }
        ]
      }
    },
    {
      "name": "Shania Twain: Queen Of Me Tour",
      "type": "event",
      "id": "G5diZ94NPjotW",
      "test": false,
      "url": "https://www.ticketmaster.com/shania-twain-queen-of-me-tour-new-york-new-york-07-11-2023/event/3B005D58E5711A7D",
      "locale": "en-us",
      "images": [
        {
          "ratio": "3_2",
          "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_RETINA_PORTRAIT_3_2.jpg",
          "width": 640,
          "height": 427,
          "fallback": false
        },
        {
          "ratio": "16_9",
          "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_EVENT_DETAIL_PAGE_16_9.jpg",
          "width": 205,
          "height": 115,
          "fallback": false
        },
        {
          "ratio": "16_9",
          "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_RETINA_LANDSCAPE_16_9.jpg",
          "width": 1136,
          "height": 639,
          "fallback": false
        },
        {
          "ratio": "16_9",
          "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_TABLET_LANDSCAPE_16_9.jpg",
          "width": 1024,
          "height": 576,
          "fallback": false
        },
        {
          "ratio": "16_9",
          "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_RECOMENDATION_16_9.jpg",
          "width": 100,
          "height": 56,
          "fallback": false
        },
        {
          "ratio": "3_2",
          "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_TABLET_LANDSCAPE_3_2.jpg",
          "width": 1024,
          "height": 683,
          "fallback": false
        },
        {
          "ratio": "16_9",
          "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_TABLET_LANDSCAPE_LARGE_16_9.jpg",
          "width": 2048,
          "height": 1152,
          "fallback": false
        },
        {
          "ratio": "4_3",
          "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_CUSTOM.jpg",
          "width": 305,
          "height": 225,
          "fallback": false
        },
        {
          "ratio": "16_9",
          "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_RETINA_PORTRAIT_16_9.jpg",
          "width": 640,
          "height": 360,
          "fallback": false
        },
        {
          "ratio": "3_2",
          "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_ARTIST_PAGE_3_2.jpg",
          "width": 305,
          "height": 203,
          "fallback": false
        }
      ],
      "sales": {
        "public": {
          "startDateTime": "2022-11-04T13:00:00Z",
          "startTBD": false,
          "startTBA": false,
          "endDateTime": "2023-07-11T23:30:00Z"
        },
        "presales": [
          {
            "startDateTime": "2022-11-01T14:00:00Z",
            "endDateTime": "2023-07-11T23:30:00Z",
            "name": "Official Platinum Presale"
          },
          {
            "startDateTime": "2022-11-01T14:00:00Z",
            "endDateTime": "2022-11-04T02:00:00Z",
            "name": "Citi® Cardmember Presale"
          },
          {
            "startDateTime": "2022-11-01T14:00:00Z",
            "endDateTime": "2022-11-03T02:00:00Z",
            "name": "Citi® Cardmember Aisle Offer"
          },
          {
            "startDateTime": "2022-11-01T14:00:00Z",
            "endDateTime": "2022-11-04T02:00:00Z",
            "name": "VIP Packages Presale"
          },
          {
            "startDateTime": "2022-11-04T13:00:00Z",
            "endDateTime": "2023-06-27T21:00:00Z",
            "name": "VIP Packages Public Onsale"
          },
          {
            "startDateTime": "2022-11-03T14:00:00Z",
            "endDateTime": "2022-11-04T02:00:00Z",
            "name": "Preferred Seating Presale"
          },
          {
            "startDateTime": "2022-11-03T14:00:00Z",
            "endDateTime": "2022-11-04T02:00:00Z",
            "name": "Live Nation Presale"
          },
          {
            "startDateTime": "2022-11-03T14:00:00Z",
            "endDateTime": "2022-11-04T02:00:00Z",
            "name": "Local Presale"
          },
          {
            "startDateTime": "2022-11-03T14:00:00Z",
            "endDateTime": "2022-11-04T02:00:00Z",
            "name": "Chase Cardmember Preferred Presale"
          },
          {
            "startDateTime": "2022-11-04T13:00:00Z",
            "endDateTime": "2023-07-11T23:30:00Z",
            "name": "Chase Cardmember Preferred Presale"
          },
          {
            "startDateTime": "2022-11-04T13:00:00Z",
            "endDateTime": "2023-06-13T21:00:00Z",
            "name": "Citi® Cardmember Preferred Tickets"
          }
        ]
      },
      "dates": {
        "start": {
          "localDate": "2023-07-11",
          "localTime": "19:30:00",
          "dateTime": "2023-07-11T23:30:00Z",
          "dateTBD": false,
          "dateTBA": false,
          "timeTBA": false,
          "noSpecificTime": false
        },
        "timezone": "America/New_York",
        "status": { "code": "onsale" },
        "spanMultipleDays": false
      },
      "classifications": [
        {
          "primary": true,
          "segment": { "id": "KZFzniwnSyZfZ7v7nJ", "name": "Music" },
          "genre": { "id": "KnvZfZ7vAv6", "name": "Country" },
          "subGenre": { "id": "KZazBEonSMnZfZ7vAFa", "name": "Country" },
          "type": { "id": "KZAyXgnZfZ7v7nI", "name": "Undefined" },
          "subType": { "id": "KZFzBErXgnZfZ7v7lJ", "name": "Undefined" },
          "family": false
        }
      ],
      "promoter": {
        "id": "653",
        "name": "LIVE NATION MUSIC",
        "description": "LIVE NATION MUSIC / NTL / USA"
      },
      "promoters": [
        {
          "id": "653",
          "name": "LIVE NATION MUSIC",
          "description": "LIVE NATION MUSIC / NTL / USA"
        }
      ],
      "info": "In the best interest of fans and staff, the Event Organizer will continue to monitor local COVID- 19 trends and meet or exceed protocols mandated by local governments. By purchasing tickets to this event, you agree to abide by the health and safety measures in effect at the time of the event, which may include, but not be limited to, wearing masks, providing proof of vaccination status and/or providing proof of negative COVID-19 test. Government mandates, venue protocols, and event requirements are subject to change. For more information, please search your event on msg.com.",
      "pleaseNote": "In the best interest of fans and staff, the Event Organizer will continue to monitor local COVID- 19 trends and meet or exceed protocols mandated by local governments. By purchasing tickets to this event, you agree to abide by the health and safety measures in effect at the time of the event, which may include, but not be limited to, wearing masks, providing proof of vaccination status and/or providing proof of negative COVID-19 test. Government mandates, venue protocols, and event requirements are subject to change. For more information, please search your event on msg.com.",
      "priceRanges": [
        { "type": "standard", "currency": "USD", "min": 65.95, "max": 300.95 }
      ],
      "products": [
        {
          "name": "Shania Twain CD",
          "id": "G5diZ9pJMf-tU",
          "url": "https://www.ticketmaster.com/shania-twain-cd-new-york-new-york-07-11-2023/event/3B005D69B7521A76",
          "type": "Upsell",
          "classifications": [
            {
              "primary": true,
              "segment": {
                "id": "KZFzniwnSyZfZ7v7n1",
                "name": "Miscellaneous"
              },
              "genre": { "id": "KnvZfZ7v7ll", "name": "Undefined" },
              "subGenre": {
                "id": "KZazBEonSMnZfZ7vAv1",
                "name": "Undefined"
              },
              "type": { "id": "KZAyXgnZfZ7v7nJ", "name": "Upsell" },
              "subType": { "id": "KZFzBErXgnZfZ7vAkd", "name": "CD" },
              "family": false
            }
          ]
        }
      ],
      "seatmap": {
        "staticUrl": "https://maps.ticketmaster.com/maps/geometry/3/event/3B005D58E5711A7D/staticImage?type=png&systemId=HOST"
      },
      "accessibility": {},
      "ticketLimit": {
        "info": "There is an eight (8) ticket limit for this event."
      },
      "ageRestrictions": { "legalAgeEnforced": false },
      "ticketing": {
        "safeTix": { "enabled": true },
        "allInclusivePricing": { "enabled": false }
      },
      "_links": {
        "self": { "href": "/discovery/v2/events/G5diZ94NPjotW?locale=en-us" },
        "attractions": [
          { "href": "/discovery/v2/attractions/K8vZ91719n0?locale=en-us" },
          { "href": "/discovery/v2/attractions/K8vZ917_bOf?locale=en-us" }
        ],
        "venues": [
          { "href": "/discovery/v2/venues/KovZpZA7AAEA?locale=en-us" }
        ]
      },
      "_embedded": {
        "venues": [
          {
            "name": "Madison Square Garden",
            "type": "venue",
            "id": "KovZpZA7AAEA",
            "test": false,
            "url": "https://www.ticketmaster.com/madison-square-garden-tickets-new-york/venue/483329",
            "locale": "en-us",
            "aliases": ["msg", "madison square garden"],
            "images": [
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dbimages/15646v.jpg",
                "width": 205,
                "height": 115,
                "fallback": false
              }
            ],
            "postalCode": "10001",
            "timezone": "America/New_York",
            "city": { "name": "New York" },
            "state": { "name": "New York", "stateCode": "NY" },
            "country": {
              "name": "United States Of America",
              "countryCode": "US"
            },
            "address": { "line1": "7th Ave & 32nd Street" },
            "location": {
              "longitude": "-73.9916006",
              "latitude": "40.7497062"
            },
            "markets": [
              { "name": "New York/Tri-State Area", "id": "35" },
              { "name": "All of US", "id": "51" },
              { "name": "Northern New Jersey", "id": "55" },
              { "name": "Connecticut", "id": "124" }
            ],
            "dmas": [
              { "id": 200 },
              { "id": 296 },
              { "id": 345 },
              { "id": 422 }
            ],
            "social": { "twitter": { "handle": "@TheGarden" } },
            "boxOfficeInfo": {
              "phoneNumberDetail": "General Info: (212) 465-MSG1 (6741) or (212) 247-4777 Knicks Information: 1(877) NYK-DUNK. Rangers Fan Line: (212) 465-4459. Liberty Hotline: (212) 564-WNBA (9622). Season Subscriptions: (212) 465-6073. Disabled Services: (212) 465-6034 Guest Relations: (212) 465 - 6225 Group Sales: (212) 465-6100 Lost and Found: (212) 465-6299",
              "openHoursDetail": "Monday - Saturday: 10:00am to 6:00pm **Tickets are not on-sale at the Box Office on the first day an event goes on-sale** The Box Office will be open at 10:00am daily or 90 minutes before the 1st performance of the day, whichever is earlier and will stay open until 8:00pm or 30 minutes after the last performance of the day begins, whichever is later. Sunday – Closed If an event takes place on Sunday, Box Office will open 90 minutes before the event start time and remain open 1 hour after event start time for Will Call and tickets sales for the evening's event only.",
              "acceptedPaymentDetail": "Cash, American Express, Visa, MasterCard, Discover. ATM machines are located in Chase Square.",
              "willCallDetail": "Pick-up tickets anytime the day of the show during box office hours (see above). Customers must present the actual credit card used to place the order and a picture ID. MSG cannot accept third party or “drop offs” from individual patrons."
            },
            "parkingDetail": "Prepaid advance parking is available for select events through Ticketmaster or via a link on www.thegarden.com. Madison Square Garden does not own or operate any parking facility.",
            "accessibleSeatingDetail": "MSG WHEELCHAIR AND TRANSFER SEATING POLICY: Wheelchair and Transfer seating is reserved exclusively for patrons with accessible needs and their companions. Accessible seating is intended for use by an individual with a mobility disability or other disability who requires the accessible features of accessible seating due to a disability, and that individual's companions. Madison Square Garden (MSG) reserves the right to investigate potential misuse of accessible seating and to take all appropriate action against individuals who fraudulently obtain tickets for accessible seating. While tickets for accessible seating legitimately purchased for the use of an individual with disability may be transferred to another individual under the same terms and conditions applicable to other tickets, in the event such ticket is transferred to a non-disabled individual, MSG reserves the right to transfer that individual to other available seating TO ORDER WHEELCHAIR AND TRANSFER SEATING: Tickets for people with accessible needs, subject to availability, may be purchased in several ways: 1) Call Ticketmaster at 866-858-0008 2) Call MSG's Disabled Services Department at (212)465-6115. 3) Visit Madison Square Garden's Box Office (see box office hours above) 4) Order Online with Ticketmaster (select your event from the list to the left) For additional information regarding accessibility at Madison Square Garden or to request any other accommodations, please call MSG's Disabled Services Department at (212) 465-6115 any weekday between 9:30am-4:30pm ET. Service Animals Pets are not permitted at Madison Square Garden. MSG has very specific policies related to service and emotional support animals. Please visit www.thegarden.com to obtain more information for admitting your animal. Assistive listening devices (ALDAs) are available upon request. Please visit the Guest Experience Office across from section 117 for assistance. There is no charge for this service, however some form of identification will be requested and returned to you, once the device is checked back in. Wheelchair Storage: For patrons who wish to transfer to a seat from their wheelchair, we will store your mobility device at the Guest Experience Office. You will receive a claim check for your device. Wheelchair Escorts to Seats: Patrons with mobility impairments who do not have access to a wheelchair may request a wheelchair to transport the individual to/from their seat, free of charge. Please be aware that our personnel cannot remain with you during the event, nor will they allow you to remain in or keep the wheelchair for the duration of the event. In the event a patron requires the use of a wheelchair for the duration of the event, we recommend bringing your own wheelchair or other mobility device. The escort pick-up area is located on the South (toward 31st) side of Chase Square at elevator alcove. Please allow for extra so that you may be accommodated prior to the event start. Simply ask a Guest Experience Representative or a MSG Security Guard for assistance. Elevators: Public elevators are available for use by guests with disabilities and service every seating level",
            "generalInfo": {
              "generalRule": "ARRIVE EARLY: Please arrive at least one-hour prior to event time. All patrons will go through a screening process upon entry with all packages, including briefcases and pocketbooks, being inspected prior to entry. Additionally, metal detectors may be utilized for some events. Bags that have passed inspection must fit comfortably under your seat.Please be mindful of traffic conditions, as Midtown Manhattan can be quite congested, especially during the holidays, parades, or special events. No smoking or electronic cigarettes permitted anywhere in the building No reentry. No recording devices No outside food or drink There are no bag or coat check facilities Alcohol Management: For most events at MSG, alcoholic beverages are available for purchase. MSG staff is trained in the nationally recognized T.E.A.M. (Techniques for Effective Alcohol Management) training program for responsible alcohol management. All guests will be required to show ID to purchase alcohol. Guests are not permitted to bring in alcoholic beverages from outside and may not leave with alcohol purchased inside the venue. Management reserves the right to refuse the sale of alcohol to any guest. Please be aware that it is the policy of The Madison Square Garden Company to require all guests who appear to be forty (40) years of age or younger to present a valid form of ID with proof of age in order to purchase alcoholic beverages at Madison Square Garden, Radio City Music Hall, The Beacon Theatre or The Chicago Theatre. Pursuant to applicable State law, MSG accepts only the following forms of identification: • A valid driver’s license or non-driver identification card issued by the United States Government, a State Government, Commonwealth, Possession or Territory of the United States or a Provincial Government of Canada. • A valid passport • A valid U.S. military ID International guests wishing to consume alcohol inside the building must bring a valid passport as the only form of acceptable ID.",
              "childRule": "For most events, all children who have reached their second birthday require a ticket to gain admittance to Madison Square Garden. Any child who has yet to reach their second birthday does not require a ticket, however, they may not occupy their own seat. Please note, that for certain children's events (such as the Wiggles and Sesame Street Live!), all children who have reached their first birthday require a ticket. Please check the event profile for your specific event for more information prior to your purchase of tickets."
            },
            "upcomingEvents": {
              "universe": 54,
              "tmr": 44,
              "ticketmaster": 156,
              "_total": 254,
              "_filtered": 0
            },
            "ada": {
              "adaPhones": "Inquiries or requests concerning accessibility should be directed to the Accessible Services Department for Madison Square Garden at 888-609-7599.",
              "adaCustomCopy": "Individuals with disabilities may purchase up to three seats for companions in the wheelchair or other accessible seating areas, provided such seats are available.  Additional tickets, if available, may be purchased as close to the accessible seating areas, as long as it does not exceed the ticket limit for the event.  Please note, for events or specific seating sections where ticket sales are limited to fewer than four tickets per patron, the same ticket restrictions will apply to the purchase of accessible seating.\n\nAccessible seating is intended for use by an individual with a mobility disability or other disability who requires the accessible features of accessible seating due to a disability, and that individual's companions.  Madison Square Garden reserves the right to investigate potential misuse of accessible seating and to take all appropriate action against individuals who fraudulently obtain tickets for accessible seating.  While tickets for accessible seating legitimately purchased for the use of an individual with disability may be transferred to another individual under the same terms and conditions applicable to other tickets, in the event such ticket is transferred to a nondisabled individual, Madison Square Garden reserves the right to transfer that individual to other available seating.\n\nIf the disabled individual cannot attend an event for which he/she has purchased tickets, please contact the Madison Square Garden Disabled Services Department at 212-465-6034 prior to the event taking place for further information. \n\nTickets for individuals with accessible needs, subject to availability, may be purchased in several ways:\n\n1) Online through Ticketmaster.com\n2) By phone to the Disabled Services Department at 888-609-7599\n3) By phone to Ticketmaster at 800-745-3000\n4) In-person by visiting the Madison Square Garden Box Office\n\nAssistive Listening Devices (ALD) are available at Guest Experience locations in the Arena. \n",
              "adaHours": "For additional information regarding Access at Madison Square Garden or to discuss any other accommodations, please contact the Disabled Services Department at 888-609-7599 between the hours of 9:30am and 4:30pm, Monday - Friday. "
            },
            "_links": {
              "self": {
                "href": "/discovery/v2/venues/KovZpZA7AAEA?locale=en-us"
              }
            }
          }
        ],
        "attractions": [
          {
            "name": "Shania Twain",
            "type": "attraction",
            "id": "K8vZ91719n0",
            "test": false,
            "url": "https://www.ticketmaster.com/shania-twain-tickets/artist/764367",
            "locale": "en-us",
            "externalLinks": {
              "youtube": [
                { "url": "https://www.youtube.com/user/ShaniaTwain" }
              ],
              "twitter": [{ "url": "https://twitter.com/FollowShania" }],
              "itunes": [
                {
                  "url": "https://music.apple.com/us/artist/shania-twain/129974"
                }
              ],
              "lastfm": [{ "url": "http://www.last.fm/music/Shania+Twain" }],
              "facebook": [{ "url": "https://www.facebook.com/ShaniaTwain" }],
              "wiki": [
                { "url": "https://en.wikipedia.org/wiki/Shania_Twain" }
              ],
              "spotify": [
                {
                  "url": "https://open.spotify.com/artist/5e4Dhzv426EvQe3aDb64jL"
                }
              ],
              "musicbrainz": [
                { "id": "faabb55d-3c9e-4c23-8779-732ac2ee2c0d" }
              ],
              "instagram": [
                { "url": "https://www.instagram.com/shaniatwain/" }
              ],
              "homepage": [{ "url": "http://www.shaniatwain.com/" }]
            },
            "aliases": ["shaina twain", "shania twain", "shinia twain"],
            "images": [
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_RETINA_PORTRAIT_3_2.jpg",
                "width": 640,
                "height": 427,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_EVENT_DETAIL_PAGE_16_9.jpg",
                "width": 205,
                "height": 115,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_RETINA_LANDSCAPE_16_9.jpg",
                "width": 1136,
                "height": 639,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_TABLET_LANDSCAPE_16_9.jpg",
                "width": 1024,
                "height": 576,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_RECOMENDATION_16_9.jpg",
                "width": 100,
                "height": 56,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_TABLET_LANDSCAPE_3_2.jpg",
                "width": 1024,
                "height": 683,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                "width": 2048,
                "height": 1152,
                "fallback": false
              },
              {
                "ratio": "4_3",
                "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_CUSTOM.jpg",
                "width": 305,
                "height": 225,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_RETINA_PORTRAIT_16_9.jpg",
                "width": 640,
                "height": 360,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_ARTIST_PAGE_3_2.jpg",
                "width": 305,
                "height": 203,
                "fallback": false
              }
            ],
            "classifications": [
              {
                "primary": true,
                "segment": { "id": "KZFzniwnSyZfZ7v7nJ", "name": "Music" },
                "genre": { "id": "KnvZfZ7vAv6", "name": "Country" },
                "subGenre": {
                  "id": "KZazBEonSMnZfZ7vAFa",
                  "name": "Country"
                },
                "type": { "id": "KZAyXgnZfZ7v7nI", "name": "Undefined" },
                "subType": {
                  "id": "KZFzBErXgnZfZ7v7lJ",
                  "name": "Undefined"
                },
                "family": false
              }
            ],
            "upcomingEvents": {
              "tmr": 1,
              "ticketmaster": 44,
              "_total": 45,
              "_filtered": 0
            },
            "_links": {
              "self": {
                "href": "/discovery/v2/attractions/K8vZ91719n0?locale=en-us"
              }
            }
          },
          {
            "name": "BRELAND",
            "type": "attraction",
            "id": "K8vZ917_bOf",
            "test": false,
            "url": "https://www.ticketmaster.com/breland-tickets/artist/2786566",
            "locale": "en-us",
            "externalLinks": {
              "spotify": [
                {
                  "url": "https://open.spotify.com/artist/0C86lmpnwiyLDUiyo4d0P1?si=rZ0xqBgXRcCK-hEBAoE4mg"
                }
              ],
              "facebook": [
                { "url": "https://www.facebook.com/brelandthepenpointguard/" }
              ],
              "instagram": [
                { "url": "https://www.instagram.com/breland/?hl=en" }
              ],
              "homepage": [{ "url": "https://www.brelandmusic.com/" }]
            },
            "images": [
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/e74/83efc299-69c1-4170-95a5-8f1a633b0e74_TABLET_LANDSCAPE_16_9.jpg",
                "width": 1024,
                "height": 576,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/e74/83efc299-69c1-4170-95a5-8f1a633b0e74_RECOMENDATION_16_9.jpg",
                "width": 100,
                "height": 56,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/e74/83efc299-69c1-4170-95a5-8f1a633b0e74_RETINA_LANDSCAPE_16_9.jpg",
                "width": 1136,
                "height": 639,
                "fallback": false
              },
              {
                "ratio": "4_3",
                "url": "https://s1.ticketm.net/dam/a/e74/83efc299-69c1-4170-95a5-8f1a633b0e74_CUSTOM.jpg",
                "width": 305,
                "height": 225,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/e74/83efc299-69c1-4170-95a5-8f1a633b0e74_ARTIST_PAGE_3_2.jpg",
                "width": 305,
                "height": 203,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/e74/83efc299-69c1-4170-95a5-8f1a633b0e74_EVENT_DETAIL_PAGE_16_9.jpg",
                "width": 205,
                "height": 115,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/e74/83efc299-69c1-4170-95a5-8f1a633b0e74_TABLET_LANDSCAPE_3_2.jpg",
                "width": 1024,
                "height": 683,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/e74/83efc299-69c1-4170-95a5-8f1a633b0e74_SOURCE",
                "width": 2426,
                "height": 1365,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/e74/83efc299-69c1-4170-95a5-8f1a633b0e74_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                "width": 2048,
                "height": 1152,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/e74/83efc299-69c1-4170-95a5-8f1a633b0e74_RETINA_PORTRAIT_3_2.jpg",
                "width": 640,
                "height": 427,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/e74/83efc299-69c1-4170-95a5-8f1a633b0e74_RETINA_PORTRAIT_16_9.jpg",
                "width": 640,
                "height": 360,
                "fallback": false
              }
            ],
            "classifications": [
              {
                "primary": true,
                "segment": { "id": "KZFzniwnSyZfZ7v7nJ", "name": "Music" },
                "genre": { "id": "KnvZfZ7vAv6", "name": "Country" },
                "subGenre": {
                  "id": "KZazBEonSMnZfZ7vAaA",
                  "name": "Country Pop"
                },
                "type": { "id": "KZAyXgnZfZ7v7la", "name": "Individual" },
                "subType": { "id": "KZFzBErXgnZfZ7vAd7", "name": "Musician" },
                "family": false
              }
            ],
            "upcomingEvents": {
              "mfx-dk": 1,
              "ticketmaster": 19,
              "mfx-no": 1,
              "_total": 21,
              "_filtered": 0
            },
            "_links": {
              "self": {
                "href": "/discovery/v2/attractions/K8vZ917_bOf?locale=en-us"
              }
            }
          }
        ]
      }
    },
    {
      "name": "New York Yankees vs. New York Mets",
      "type": "event",
      "id": "G5vVZ9oE0N0O9",
      "test": false,
      "url": "https://www.ticketmaster.com/new-york-yankees-vs-new-york-bronx-new-york-07-25-2023/event/1D005D19E48E4817",
      "locale": "en-us",
      "images": [
        {
          "ratio": "16_9",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RETINA_LANDSCAPE_16_9.jpg",
          "width": 1136,
          "height": 639,
          "fallback": false
        },
        {
          "ratio": "16_9",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RECOMENDATION_16_9.jpg",
          "width": 100,
          "height": 56,
          "fallback": false
        },
        {
          "ratio": "16_9",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_TABLET_LANDSCAPE_16_9.jpg",
          "width": 1024,
          "height": 576,
          "fallback": false
        },
        {
          "ratio": "3_2",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_TABLET_LANDSCAPE_3_2.jpg",
          "width": 1024,
          "height": 683,
          "fallback": false
        },
        {
          "ratio": "16_9",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_EVENT_DETAIL_PAGE_16_9.jpg",
          "width": 205,
          "height": 115,
          "fallback": false
        },
        {
          "ratio": "16_9",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RETINA_PORTRAIT_16_9.jpg",
          "width": 640,
          "height": 360,
          "fallback": false
        },
        {
          "ratio": "3_2",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RETINA_PORTRAIT_3_2.jpg",
          "width": 640,
          "height": 427,
          "fallback": false
        },
        {
          "ratio": "4_3",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_CUSTOM.jpg",
          "width": 305,
          "height": 225,
          "fallback": false
        },
        {
          "ratio": "3_2",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_ARTIST_PAGE_3_2.jpg",
          "width": 305,
          "height": 203,
          "fallback": false
        },
        {
          "ratio": "16_9",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_TABLET_LANDSCAPE_LARGE_16_9.jpg",
          "width": 2048,
          "height": 1152,
          "fallback": false
        }
      ],
      "sales": {
        "public": {
          "startDateTime": "2022-09-14T14:00:00Z",
          "startTBD": false,
          "startTBA": false,
          "endDateTime": "2023-07-26T00:05:00Z"
        },
        "presales": [
          {
            "startDateTime": "2022-09-13T14:00:00Z",
            "endDateTime": "2022-09-13T16:00:00Z",
            "name": "NY Yankees Season Ticket Licensees"
          },
          {
            "startDateTime": "2022-09-13T15:00:00Z",
            "endDateTime": "2022-09-13T16:00:00Z",
            "name": "NY Yankees Past Buyers"
          },
          {
            "startDateTime": "2022-09-13T16:00:00Z",
            "endDateTime": "2022-09-14T02:00:00Z",
            "name": "Mastercard Cardholders"
          }
        ]
      },
      "dates": {
        "start": {
          "localDate": "2023-07-25",
          "localTime": "19:05:00",
          "dateTime": "2023-07-25T23:05:00Z",
          "dateTBD": false,
          "dateTBA": false,
          "timeTBA": false,
          "noSpecificTime": false
        },
        "timezone": "America/New_York",
        "status": { "code": "onsale" },
        "spanMultipleDays": false
      },
      "classifications": [
        {
          "primary": true,
          "segment": { "id": "KZFzniwnSyZfZ7v7nE", "name": "Sports" },
          "genre": { "id": "KnvZfZ7vAdv", "name": "Baseball" },
          "subGenre": { "id": "KZazBEonSMnZfZ7vF1n", "name": "MLB" },
          "type": { "id": "KZAyXgnZfZ7v7l1", "name": "Group" },
          "subType": { "id": "KZFzBErXgnZfZ7vA7d", "name": "Team" },
          "family": false
        }
      ],
      "promoter": {
        "id": "685",
        "name": "MLB REGULAR SEASON",
        "description": "MLB REGULAR SEASON / NTL / USA"
      },
      "promoters": [
        {
          "id": "685",
          "name": "MLB REGULAR SEASON",
          "description": "MLB REGULAR SEASON / NTL / USA"
        }
      ],
      "info": "Please adhere to published limits. Persons who exceed the ticket limit may have any or all of their orders and tickets cancelled without notice by Ticketmaster in its discretion. This includes orders associated with the same name, e-mail, billing address, credit card number or other information. If you purchase tickets, you may receive customer service messages via email from the New York Yankees, including optional surveys regarding your baseball experience. Ticket holder assumes all risk of injury from balls and bats entering the stands. Please note that protective netting of varying heights is used in the Stadium from Section 011 to behind home plate to Section 029. For more information, please visit yankees.com/netting. The number of innings in a regulation game shall be determined by MLB and may be shortened in accordance with MLB rules. Licensor makes no representation, warranty and/or guarantee that nine (9) innings will be played in any regulation game.",
      "pleaseNote": "The terms and conditions of your ticket and policies applicable to use are updated to address COVID-19 and health & safety. By purchasing a Yankees ticket, you accept these Terms and Conditions and policies applicable to use. Visit yankees.com/ticketback. All ticket verification QR codes will appear 48 hrs prior to the scheduled start of the game. All individual game ticket prices are subject to variable and dynamic pricing, which provide fans with more price options based on changing factors that affect market demand.",
      "priceRanges": [
        { "type": "standard", "currency": "USD", "min": 90.0, "max": 550.0 }
      ],
      "seatmap": {
        "staticUrl": "https://maps.ticketmaster.com/maps/geometry/3/event/1D005D19E48E4817/staticImage?type=png&systemId=HOST"
      },
      "accessibility": {
        "info": "Yankee Stadium management strives to provide an accessible environment for all its Guests. Wheelchair accessible and aisle-transfer (semi-ambulatory) seats are offered at various price points and locations, pending availability, throughout the Stadium and include the Yankees Premium seat locations. The Stadium also offers enhanced accessibility for Guests with hearing loss or low vision and for Guests who are deaf or blind. \r\nPlease select the location or price point as indicated in your search that best fits your needs to view available options. You may then select and purchase seats that are available through Ticketmaster. \r\nNotwithstanding, if you would like more details or if you have any questions regarding wheelchair accessible and/or aisle-transfer seating, you may contact Disabled Services at Yankee Stadium at (718) 579-4510 (voice) or (718) 579-4595 (TTY) or email disabledservices@yankees.com.",
        "ticketLimit": 19
      },
      "ticketLimit": {
        "info": "Only a LIMITED number of Tickets (as determined by the Yankees in its sole and absolute discretion) will be made available during the presale. Maximum of nine (9) Tickets to each potential game scheduled to be played during the 2023 Regular Season."
      },
      "ageRestrictions": { "legalAgeEnforced": false },
      "ticketing": {
        "safeTix": { "enabled": true },
        "allInclusivePricing": { "enabled": false }
      },
      "_links": {
        "self": { "href": "/discovery/v2/events/G5vVZ9oE0N0O9?locale=en-us" },
        "attractions": [
          { "href": "/discovery/v2/attractions/K8vZ9171okV?locale=en-us" },
          { "href": "/discovery/v2/attractions/K8vZ91718B7?locale=en-us" }
        ],
        "venues": [
          { "href": "/discovery/v2/venues/KovZpZA6t77A?locale=en-us" }
        ]
      },
      "_embedded": {
        "venues": [
          {
            "name": "Yankee Stadium",
            "type": "venue",
            "id": "KovZpZA6t77A",
            "test": false,
            "url": "https://www.ticketmaster.com/yankee-stadium-tickets-bronx/venue/237572",
            "locale": "en-us",
            "images": [
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dbimages/16603v.jpg",
                "width": 205,
                "height": 115,
                "fallback": false
              }
            ],
            "postalCode": "10451",
            "timezone": "America/New_York",
            "city": { "name": "Bronx" },
            "state": { "name": "New York", "stateCode": "NY" },
            "country": {
              "name": "United States Of America",
              "countryCode": "US"
            },
            "address": { "line1": "1 East 161st Street" },
            "location": {
              "longitude": "-73.9276264",
              "latitude": "40.8285237"
            },
            "markets": [
              { "name": "New York/Tri-State Area", "id": "35" },
              { "name": "Northern New Jersey", "id": "55" },
              { "name": "Connecticut", "id": "124" }
            ],
            "dmas": [{ "id": 296 }, { "id": 345 }, { "id": 422 }],
            "boxOfficeInfo": {
              "openHoursDetail": "Please check yankees.com for updated information including a Yankee Stadium Ticket Office schedule."
            },
            "parkingDetail": "PREPAID PARKING The Yankees neither control nor operate the parking lots and garages surrounding the Stadium and are not responsible for setting parking lot rates, refund policies, rules and/or procedures. Quik Park was granted those rights, including responsibility for establishing and controlling parking rates, refund policies, rules and/or procedures, by New York City.",
            "upcomingEvents": {
              "ticketmaster": 692,
              "_total": 692,
              "_filtered": 0
            },
            "ada": {
              "adaPhones": "Disabled Services at Yankee Stadium: (718) 579-4510 (voice) or (718) 579-4595 (TTY) \nEmail disabledservices@yankees.com.\n",
              "adaCustomCopy": "Yankee Stadium management strives to provide an accessible environment for all its Guests. Wheelchair accessible and aisle-transfer (semi-ambulatory) seats are offered at various price points and locations, pending availability, throughout the Stadium and include the Yankees Premium seat locations. The Stadium also offers enhanced accessibility for Guests with hearing loss or low vision and for Guests who are deaf or blind. \nPlease select the location or price point as indicated in your search that best fits your needs to view available options.  You may then select and purchase seats that are available through Ticketmaster including its website.  \nNotwithstanding, if you would like more details or if you have any questions regarding wheelchair accessible and/or aisle-transfer seating, you may contact Disabled Services at Yankee Stadium at (718) 579-4510 (voice) or (718) 579-4595 (TTY) or email disabledservices@yankees.com.\n\n",
              "adaHours": "Please check yankees.com for updated information including a Yankee Stadium Ticket Office schedule.\n"
            },
            "_links": {
              "self": {
                "href": "/discovery/v2/venues/KovZpZA6t77A?locale=en-us"
              }
            }
          }
        ],
        "attractions": [
          {
            "name": "New York Yankees",
            "type": "attraction",
            "id": "K8vZ9171okV",
            "test": false,
            "url": "https://www.ticketmaster.com/new-york-yankees-tickets/artist/805992",
            "locale": "en-us",
            "externalLinks": {
              "twitter": [{ "url": "https://twitter.com/Yankees" }],
              "wiki": [
                { "url": "https://en.wikipedia.org/wiki/New_York_Yankees" }
              ],
              "facebook": [{ "url": "https://www.facebook.com/Yankees" }],
              "instagram": [{ "url": "https://www.instagram.com/yankees" }],
              "homepage": [{ "url": "https://www.mlb.com/yankees" }]
            },
            "images": [
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RETINA_LANDSCAPE_16_9.jpg",
                "width": 1136,
                "height": 639,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RECOMENDATION_16_9.jpg",
                "width": 100,
                "height": 56,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_TABLET_LANDSCAPE_16_9.jpg",
                "width": 1024,
                "height": 576,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_TABLET_LANDSCAPE_3_2.jpg",
                "width": 1024,
                "height": 683,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_EVENT_DETAIL_PAGE_16_9.jpg",
                "width": 205,
                "height": 115,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RETINA_PORTRAIT_16_9.jpg",
                "width": 640,
                "height": 360,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RETINA_PORTRAIT_3_2.jpg",
                "width": 640,
                "height": 427,
                "fallback": false
              },
              {
                "ratio": "4_3",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_CUSTOM.jpg",
                "width": 305,
                "height": 225,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_ARTIST_PAGE_3_2.jpg",
                "width": 305,
                "height": 203,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                "width": 2048,
                "height": 1152,
                "fallback": false
              }
            ],
            "classifications": [
              {
                "primary": true,
                "segment": { "id": "KZFzniwnSyZfZ7v7nE", "name": "Sports" },
                "genre": { "id": "KnvZfZ7vAdv", "name": "Baseball" },
                "subGenre": { "id": "KZazBEonSMnZfZ7vF1n", "name": "MLB" },
                "type": { "id": "KZAyXgnZfZ7v7l1", "name": "Group" },
                "subType": { "id": "KZFzBErXgnZfZ7vA7d", "name": "Team" },
                "family": false
              }
            ],
            "upcomingEvents": {
              "tmr": 29,
              "ticketmaster": 133,
              "_total": 162,
              "_filtered": 0
            },
            "_links": {
              "self": {
                "href": "/discovery/v2/attractions/K8vZ9171okV?locale=en-us"
              }
            }
          },
          {
            "name": "New York Mets",
            "type": "attraction",
            "id": "K8vZ91718B7",
            "test": false,
            "url": "https://www.ticketmaster.com/new-york-mets-tickets/artist/805990",
            "locale": "en-us",
            "externalLinks": {
              "twitter": [{ "url": "https://twitter.com/Mets" }],
              "wiki": [
                { "url": "https://en.wikipedia.org/wiki/New_York_Mets" }
              ],
              "facebook": [{ "url": "https://www.facebook.com/Mets" }],
              "instagram": [{ "url": "https://www.instagram.com/mets" }],
              "homepage": [{ "url": "https://www.mlb.com/mets" }]
            },
            "aliases": ["ny mets", "new york mets"],
            "images": [
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/353/fdba69b8-e1fc-4ac3-9b42-f50e66169353_1343961_EVENT_DETAIL_PAGE_16_9.jpg",
                "width": 205,
                "height": 115,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/353/fdba69b8-e1fc-4ac3-9b42-f50e66169353_1343961_RETINA_LANDSCAPE_16_9.jpg",
                "width": 1136,
                "height": 639,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/353/fdba69b8-e1fc-4ac3-9b42-f50e66169353_1343961_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                "width": 2048,
                "height": 1152,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/353/fdba69b8-e1fc-4ac3-9b42-f50e66169353_1343961_RETINA_PORTRAIT_3_2.jpg",
                "width": 640,
                "height": 427,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/353/fdba69b8-e1fc-4ac3-9b42-f50e66169353_1343961_RETINA_PORTRAIT_16_9.jpg",
                "width": 640,
                "height": 360,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/353/fdba69b8-e1fc-4ac3-9b42-f50e66169353_1343961_RECOMENDATION_16_9.jpg",
                "width": 100,
                "height": 56,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/353/fdba69b8-e1fc-4ac3-9b42-f50e66169353_1343961_TABLET_LANDSCAPE_3_2.jpg",
                "width": 1024,
                "height": 683,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/353/fdba69b8-e1fc-4ac3-9b42-f50e66169353_1343961_TABLET_LANDSCAPE_16_9.jpg",
                "width": 1024,
                "height": 576,
                "fallback": false
              },
              {
                "ratio": "4_3",
                "url": "https://s1.ticketm.net/dam/a/353/fdba69b8-e1fc-4ac3-9b42-f50e66169353_1343961_CUSTOM.jpg",
                "width": 305,
                "height": 225,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/353/fdba69b8-e1fc-4ac3-9b42-f50e66169353_1343961_ARTIST_PAGE_3_2.jpg",
                "width": 305,
                "height": 203,
                "fallback": false
              }
            ],
            "classifications": [
              {
                "primary": true,
                "segment": { "id": "KZFzniwnSyZfZ7v7nE", "name": "Sports" },
                "genre": { "id": "KnvZfZ7vAdv", "name": "Baseball" },
                "subGenre": { "id": "KZazBEonSMnZfZ7vF1n", "name": "MLB" },
                "type": { "id": "KZAyXgnZfZ7v7l1", "name": "Group" },
                "subType": { "id": "KZFzBErXgnZfZ7vA7d", "name": "Team" },
                "family": false
              }
            ],
            "upcomingEvents": {
              "tmr": 67,
              "ticketmaster": 17,
              "_total": 84,
              "_filtered": 0
            },
            "_links": {
              "self": {
                "href": "/discovery/v2/attractions/K8vZ91718B7?locale=en-us"
              }
            }
          }
        ]
      }
    },
    {
      "name": "New York Yankees vs. New York Mets",
      "type": "event",
      "id": "G5vVZ9oE0NVOO",
      "test": false,
      "url": "https://www.ticketmaster.com/new-york-yankees-vs-new-york-bronx-new-york-07-26-2023/event/1D005D19E48F4820",
      "locale": "en-us",
      "images": [
        {
          "ratio": "16_9",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RETINA_LANDSCAPE_16_9.jpg",
          "width": 1136,
          "height": 639,
          "fallback": false
        },
        {
          "ratio": "16_9",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RECOMENDATION_16_9.jpg",
          "width": 100,
          "height": 56,
          "fallback": false
        },
        {
          "ratio": "16_9",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_TABLET_LANDSCAPE_16_9.jpg",
          "width": 1024,
          "height": 576,
          "fallback": false
        },
        {
          "ratio": "3_2",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_TABLET_LANDSCAPE_3_2.jpg",
          "width": 1024,
          "height": 683,
          "fallback": false
        },
        {
          "ratio": "16_9",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_EVENT_DETAIL_PAGE_16_9.jpg",
          "width": 205,
          "height": 115,
          "fallback": false
        },
        {
          "ratio": "16_9",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RETINA_PORTRAIT_16_9.jpg",
          "width": 640,
          "height": 360,
          "fallback": false
        },
        {
          "ratio": "3_2",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RETINA_PORTRAIT_3_2.jpg",
          "width": 640,
          "height": 427,
          "fallback": false
        },
        {
          "ratio": "4_3",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_CUSTOM.jpg",
          "width": 305,
          "height": 225,
          "fallback": false
        },
        {
          "ratio": "3_2",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_ARTIST_PAGE_3_2.jpg",
          "width": 305,
          "height": 203,
          "fallback": false
        },
        {
          "ratio": "16_9",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_TABLET_LANDSCAPE_LARGE_16_9.jpg",
          "width": 2048,
          "height": 1152,
          "fallback": false
        }
      ],
      "sales": {
        "public": {
          "startDateTime": "2022-09-14T14:00:00Z",
          "startTBD": false,
          "startTBA": false,
          "endDateTime": "2023-07-27T00:05:00Z"
        },
        "presales": [
          {
            "startDateTime": "2022-09-13T14:00:00Z",
            "endDateTime": "2022-09-13T16:00:00Z",
            "name": "NY Yankees Season Ticket Licensees"
          },
          {
            "startDateTime": "2022-09-13T15:00:00Z",
            "endDateTime": "2022-09-13T16:00:00Z",
            "name": "NY Yankees Past Buyers"
          },
          {
            "startDateTime": "2022-09-13T16:00:00Z",
            "endDateTime": "2022-09-14T02:00:00Z",
            "name": "Mastercard Cardholders"
          }
        ]
      },
      "dates": {
        "start": {
          "localDate": "2023-07-26",
          "localTime": "19:05:00",
          "dateTime": "2023-07-26T23:05:00Z",
          "dateTBD": false,
          "dateTBA": false,
          "timeTBA": false,
          "noSpecificTime": false
        },
        "timezone": "America/New_York",
        "status": { "code": "onsale" },
        "spanMultipleDays": false
      },
      "classifications": [
        {
          "primary": true,
          "segment": { "id": "KZFzniwnSyZfZ7v7nE", "name": "Sports" },
          "genre": { "id": "KnvZfZ7vAdv", "name": "Baseball" },
          "subGenre": { "id": "KZazBEonSMnZfZ7vF1n", "name": "MLB" },
          "type": { "id": "KZAyXgnZfZ7v7l1", "name": "Group" },
          "subType": { "id": "KZFzBErXgnZfZ7vA7d", "name": "Team" },
          "family": false
        }
      ],
      "promoter": {
        "id": "685",
        "name": "MLB REGULAR SEASON",
        "description": "MLB REGULAR SEASON / NTL / USA"
      },
      "promoters": [
        {
          "id": "685",
          "name": "MLB REGULAR SEASON",
          "description": "MLB REGULAR SEASON / NTL / USA"
        }
      ],
      "info": "Please adhere to published limits. Persons who exceed the ticket limit may have any or all of their orders and tickets cancelled without notice by Ticketmaster in its discretion. This includes orders associated with the same name, e-mail, billing address, credit card number or other information. If you purchase tickets, you may receive customer service messages via email from the New York Yankees, including optional surveys regarding your baseball experience. Ticket holder assumes all risk of injury from balls and bats entering the stands. Please note that protective netting of varying heights is used in the Stadium from Section 011 to behind home plate to Section 029. For more information, please visit yankees.com/netting. The number of innings in a regulation game shall be determined by MLB and may be shortened in accordance with MLB rules. Licensor makes no representation, warranty and/or guarantee that nine (9) innings will be played in any regulation game.",
      "pleaseNote": "The terms and conditions of your ticket and policies applicable to use are updated to address COVID-19 and health & safety. By purchasing a Yankees ticket, you accept these Terms and Conditions and policies applicable to use. Visit yankees.com/ticketback. All ticket verification QR codes will appear 48 hrs prior to the scheduled start of the game. All individual game ticket prices are subject to variable and dynamic pricing, which provide fans with more price options based on changing factors that affect market demand.",
      "priceRanges": [
        { "type": "standard", "currency": "USD", "min": 90.0, "max": 550.0 }
      ],
      "seatmap": {
        "staticUrl": "https://maps.ticketmaster.com/maps/geometry/3/event/1D005D19E48F4820/staticImage?type=png&systemId=HOST"
      },
      "accessibility": {
        "info": "Yankee Stadium management strives to provide an accessible environment for all its Guests. Wheelchair accessible and aisle-transfer (semi-ambulatory) seats are offered at various price points and locations, pending availability, throughout the Stadium and include the Yankees Premium seat locations. The Stadium also offers enhanced accessibility for Guests with hearing loss or low vision and for Guests who are deaf or blind. \r\nPlease select the location or price point as indicated in your search that best fits your needs to view available options. You may then select and purchase seats that are available through Ticketmaster. \r\nNotwithstanding, if you would like more details or if you have any questions regarding wheelchair accessible and/or aisle-transfer seating, you may contact Disabled Services at Yankee Stadium at (718) 579-4510 (voice) or (718) 579-4595 (TTY) or email disabledservices@yankees.com.",
        "ticketLimit": 19
      },
      "ticketLimit": {
        "info": "Only a LIMITED number of Tickets (as determined by the Yankees in its sole and absolute discretion) will be made available during the presale. Maximum of nine (9) Tickets to each potential game scheduled to be played during the 2023 Regular Season."
      },
      "ageRestrictions": { "legalAgeEnforced": false },
      "ticketing": {
        "safeTix": { "enabled": true },
        "allInclusivePricing": { "enabled": false }
      },
      "_links": {
        "self": { "href": "/discovery/v2/events/G5vVZ9oE0NVOO?locale=en-us" },
        "attractions": [
          { "href": "/discovery/v2/attractions/K8vZ9171okV?locale=en-us" },
          { "href": "/discovery/v2/attractions/K8vZ91718B7?locale=en-us" }
        ],
        "venues": [
          { "href": "/discovery/v2/venues/KovZpZA6t77A?locale=en-us" }
        ]
      },
      "_embedded": {
        "venues": [
          {
            "name": "Yankee Stadium",
            "type": "venue",
            "id": "KovZpZA6t77A",
            "test": false,
            "url": "https://www.ticketmaster.com/yankee-stadium-tickets-bronx/venue/237572",
            "locale": "en-us",
            "images": [
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dbimages/16603v.jpg",
                "width": 205,
                "height": 115,
                "fallback": false
              }
            ],
            "postalCode": "10451",
            "timezone": "America/New_York",
            "city": { "name": "Bronx" },
            "state": { "name": "New York", "stateCode": "NY" },
            "country": {
              "name": "United States Of America",
              "countryCode": "US"
            },
            "address": { "line1": "1 East 161st Street" },
            "location": {
              "longitude": "-73.9276264",
              "latitude": "40.8285237"
            },
            "markets": [
              { "name": "New York/Tri-State Area", "id": "35" },
              { "name": "Northern New Jersey", "id": "55" },
              { "name": "Connecticut", "id": "124" }
            ],
            "dmas": [{ "id": 296 }, { "id": 345 }, { "id": 422 }],
            "boxOfficeInfo": {
              "openHoursDetail": "Please check yankees.com for updated information including a Yankee Stadium Ticket Office schedule."
            },
            "parkingDetail": "PREPAID PARKING The Yankees neither control nor operate the parking lots and garages surrounding the Stadium and are not responsible for setting parking lot rates, refund policies, rules and/or procedures. Quik Park was granted those rights, including responsibility for establishing and controlling parking rates, refund policies, rules and/or procedures, by New York City.",
            "upcomingEvents": {
              "ticketmaster": 692,
              "_total": 692,
              "_filtered": 0
            },
            "ada": {
              "adaPhones": "Disabled Services at Yankee Stadium: (718) 579-4510 (voice) or (718) 579-4595 (TTY) \nEmail disabledservices@yankees.com.\n",
              "adaCustomCopy": "Yankee Stadium management strives to provide an accessible environment for all its Guests. Wheelchair accessible and aisle-transfer (semi-ambulatory) seats are offered at various price points and locations, pending availability, throughout the Stadium and include the Yankees Premium seat locations. The Stadium also offers enhanced accessibility for Guests with hearing loss or low vision and for Guests who are deaf or blind. \nPlease select the location or price point as indicated in your search that best fits your needs to view available options.  You may then select and purchase seats that are available through Ticketmaster including its website.  \nNotwithstanding, if you would like more details or if you have any questions regarding wheelchair accessible and/or aisle-transfer seating, you may contact Disabled Services at Yankee Stadium at (718) 579-4510 (voice) or (718) 579-4595 (TTY) or email disabledservices@yankees.com.\n\n",
              "adaHours": "Please check yankees.com for updated information including a Yankee Stadium Ticket Office schedule.\n"
            },
            "_links": {
              "self": {
                "href": "/discovery/v2/venues/KovZpZA6t77A?locale=en-us"
              }
            }
          }
        ],
        "attractions": [
          {
            "name": "New York Yankees",
            "type": "attraction",
            "id": "K8vZ9171okV",
            "test": false,
            "url": "https://www.ticketmaster.com/new-york-yankees-tickets/artist/805992",
            "locale": "en-us",
            "externalLinks": {
              "twitter": [{ "url": "https://twitter.com/Yankees" }],
              "wiki": [
                { "url": "https://en.wikipedia.org/wiki/New_York_Yankees" }
              ],
              "facebook": [{ "url": "https://www.facebook.com/Yankees" }],
              "instagram": [{ "url": "https://www.instagram.com/yankees" }],
              "homepage": [{ "url": "https://www.mlb.com/yankees" }]
            },
            "images": [
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RETINA_LANDSCAPE_16_9.jpg",
                "width": 1136,
                "height": 639,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RECOMENDATION_16_9.jpg",
                "width": 100,
                "height": 56,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_TABLET_LANDSCAPE_16_9.jpg",
                "width": 1024,
                "height": 576,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_TABLET_LANDSCAPE_3_2.jpg",
                "width": 1024,
                "height": 683,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_EVENT_DETAIL_PAGE_16_9.jpg",
                "width": 205,
                "height": 115,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RETINA_PORTRAIT_16_9.jpg",
                "width": 640,
                "height": 360,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RETINA_PORTRAIT_3_2.jpg",
                "width": 640,
                "height": 427,
                "fallback": false
              },
              {
                "ratio": "4_3",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_CUSTOM.jpg",
                "width": 305,
                "height": 225,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_ARTIST_PAGE_3_2.jpg",
                "width": 305,
                "height": 203,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                "width": 2048,
                "height": 1152,
                "fallback": false
              }
            ],
            "classifications": [
              {
                "primary": true,
                "segment": { "id": "KZFzniwnSyZfZ7v7nE", "name": "Sports" },
                "genre": { "id": "KnvZfZ7vAdv", "name": "Baseball" },
                "subGenre": { "id": "KZazBEonSMnZfZ7vF1n", "name": "MLB" },
                "type": { "id": "KZAyXgnZfZ7v7l1", "name": "Group" },
                "subType": { "id": "KZFzBErXgnZfZ7vA7d", "name": "Team" },
                "family": false
              }
            ],
            "upcomingEvents": {
              "tmr": 29,
              "ticketmaster": 133,
              "_total": 162,
              "_filtered": 0
            },
            "_links": {
              "self": {
                "href": "/discovery/v2/attractions/K8vZ9171okV?locale=en-us"
              }
            }
          },
          {
            "name": "New York Mets",
            "type": "attraction",
            "id": "K8vZ91718B7",
            "test": false,
            "url": "https://www.ticketmaster.com/new-york-mets-tickets/artist/805990",
            "locale": "en-us",
            "externalLinks": {
              "twitter": [{ "url": "https://twitter.com/Mets" }],
              "wiki": [
                { "url": "https://en.wikipedia.org/wiki/New_York_Mets" }
              ],
              "facebook": [{ "url": "https://www.facebook.com/Mets" }],
              "instagram": [{ "url": "https://www.instagram.com/mets" }],
              "homepage": [{ "url": "https://www.mlb.com/mets" }]
            },
            "aliases": ["ny mets", "new york mets"],
            "images": [
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/353/fdba69b8-e1fc-4ac3-9b42-f50e66169353_1343961_EVENT_DETAIL_PAGE_16_9.jpg",
                "width": 205,
                "height": 115,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/353/fdba69b8-e1fc-4ac3-9b42-f50e66169353_1343961_RETINA_LANDSCAPE_16_9.jpg",
                "width": 1136,
                "height": 639,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/353/fdba69b8-e1fc-4ac3-9b42-f50e66169353_1343961_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                "width": 2048,
                "height": 1152,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/353/fdba69b8-e1fc-4ac3-9b42-f50e66169353_1343961_RETINA_PORTRAIT_3_2.jpg",
                "width": 640,
                "height": 427,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/353/fdba69b8-e1fc-4ac3-9b42-f50e66169353_1343961_RETINA_PORTRAIT_16_9.jpg",
                "width": 640,
                "height": 360,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/353/fdba69b8-e1fc-4ac3-9b42-f50e66169353_1343961_RECOMENDATION_16_9.jpg",
                "width": 100,
                "height": 56,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/353/fdba69b8-e1fc-4ac3-9b42-f50e66169353_1343961_TABLET_LANDSCAPE_3_2.jpg",
                "width": 1024,
                "height": 683,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/353/fdba69b8-e1fc-4ac3-9b42-f50e66169353_1343961_TABLET_LANDSCAPE_16_9.jpg",
                "width": 1024,
                "height": 576,
                "fallback": false
              },
              {
                "ratio": "4_3",
                "url": "https://s1.ticketm.net/dam/a/353/fdba69b8-e1fc-4ac3-9b42-f50e66169353_1343961_CUSTOM.jpg",
                "width": 305,
                "height": 225,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/353/fdba69b8-e1fc-4ac3-9b42-f50e66169353_1343961_ARTIST_PAGE_3_2.jpg",
                "width": 305,
                "height": 203,
                "fallback": false
              }
            ],
            "classifications": [
              {
                "primary": true,
                "segment": { "id": "KZFzniwnSyZfZ7v7nE", "name": "Sports" },
                "genre": { "id": "KnvZfZ7vAdv", "name": "Baseball" },
                "subGenre": { "id": "KZazBEonSMnZfZ7vF1n", "name": "MLB" },
                "type": { "id": "KZAyXgnZfZ7v7l1", "name": "Group" },
                "subType": { "id": "KZFzBErXgnZfZ7vA7d", "name": "Team" },
                "family": false
              }
            ],
            "upcomingEvents": {
              "tmr": 67,
              "ticketmaster": 17,
              "_total": 84,
              "_filtered": 0
            },
            "_links": {
              "self": {
                "href": "/discovery/v2/attractions/K8vZ91718B7?locale=en-us"
              }
            }
          }
        ]
      }
    },
    {
      "name": "New York Yankees vs. Toronto Blue Jays",
      "type": "event",
      "id": "G5vVZ9oE0lVxb",
      "test": false,
      "url": "https://www.ticketmaster.com/new-york-yankees-vs-toronto-blue-bronx-new-york-09-19-2023/event/1D005D19E4AF4898",
      "locale": "en-us",
      "images": [
        {
          "ratio": "16_9",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RETINA_LANDSCAPE_16_9.jpg",
          "width": 1136,
          "height": 639,
          "fallback": false
        },
        {
          "ratio": "16_9",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RECOMENDATION_16_9.jpg",
          "width": 100,
          "height": 56,
          "fallback": false
        },
        {
          "ratio": "16_9",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_TABLET_LANDSCAPE_16_9.jpg",
          "width": 1024,
          "height": 576,
          "fallback": false
        },
        {
          "ratio": "3_2",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_TABLET_LANDSCAPE_3_2.jpg",
          "width": 1024,
          "height": 683,
          "fallback": false
        },
        {
          "ratio": "16_9",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_EVENT_DETAIL_PAGE_16_9.jpg",
          "width": 205,
          "height": 115,
          "fallback": false
        },
        {
          "ratio": "16_9",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RETINA_PORTRAIT_16_9.jpg",
          "width": 640,
          "height": 360,
          "fallback": false
        },
        {
          "ratio": "3_2",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RETINA_PORTRAIT_3_2.jpg",
          "width": 640,
          "height": 427,
          "fallback": false
        },
        {
          "ratio": "4_3",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_CUSTOM.jpg",
          "width": 305,
          "height": 225,
          "fallback": false
        },
        {
          "ratio": "3_2",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_ARTIST_PAGE_3_2.jpg",
          "width": 305,
          "height": 203,
          "fallback": false
        },
        {
          "ratio": "16_9",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_TABLET_LANDSCAPE_LARGE_16_9.jpg",
          "width": 2048,
          "height": 1152,
          "fallback": false
        }
      ],
      "sales": {
        "public": {
          "startDateTime": "2022-09-14T14:00:00Z",
          "startTBD": false,
          "startTBA": false,
          "endDateTime": "2023-09-20T00:05:00Z"
        },
        "presales": [
          {
            "startDateTime": "2022-09-13T14:00:00Z",
            "endDateTime": "2022-09-13T16:00:00Z",
            "name": "NY Yankees Season Ticket Licensees"
          },
          {
            "startDateTime": "2022-09-13T15:00:00Z",
            "endDateTime": "2022-09-13T16:00:00Z",
            "name": "NY Yankees Past Buyers"
          },
          {
            "startDateTime": "2022-09-13T16:00:00Z",
            "endDateTime": "2022-09-14T02:00:00Z",
            "name": "Mastercard Cardholders"
          },
          {
            "startDateTime": "2022-11-18T15:00:00Z",
            "endDateTime": "2022-12-24T04:59:00Z",
            "name": "Me + 3 Promotional Offer",
            "description": "Special Offers on 4 Tickets!"
          }
        ]
      },
      "dates": {
        "start": {
          "localDate": "2023-09-19",
          "localTime": "19:05:00",
          "dateTime": "2023-09-19T23:05:00Z",
          "dateTBD": false,
          "dateTBA": false,
          "timeTBA": false,
          "noSpecificTime": false
        },
        "timezone": "America/New_York",
        "status": { "code": "onsale" },
        "spanMultipleDays": false
      },
      "classifications": [
        {
          "primary": true,
          "segment": { "id": "KZFzniwnSyZfZ7v7nE", "name": "Sports" },
          "genre": { "id": "KnvZfZ7vAdv", "name": "Baseball" },
          "subGenre": { "id": "KZazBEonSMnZfZ7vF1n", "name": "MLB" },
          "type": { "id": "KZAyXgnZfZ7v7l1", "name": "Group" },
          "subType": { "id": "KZFzBErXgnZfZ7vA7d", "name": "Team" },
          "family": false
        }
      ],
      "promoter": {
        "id": "685",
        "name": "MLB REGULAR SEASON",
        "description": "MLB REGULAR SEASON / NTL / USA"
      },
      "promoters": [
        {
          "id": "685",
          "name": "MLB REGULAR SEASON",
          "description": "MLB REGULAR SEASON / NTL / USA"
        }
      ],
      "info": "Please adhere to published limits. Persons who exceed the ticket limit may have any or all of their orders and tickets cancelled without notice by Ticketmaster in its discretion. This includes orders associated with the same name, e-mail, billing address, credit card number or other information. If you purchase tickets, you may receive customer service messages via email from the New York Yankees, including optional surveys regarding your baseball experience. Ticket holder assumes all risk of injury from balls and bats entering the stands. Please note that protective netting of varying heights is used in the Stadium from Section 011 to behind home plate to Section 029. For more information, please visit yankees.com/netting. The number of innings in a regulation game shall be determined by MLB and may be shortened in accordance with MLB rules. Licensor makes no representation, warranty and/or guarantee that nine (9) innings will be played in any regulation game.",
      "pleaseNote": "The terms and conditions of your ticket and policies applicable to use are updated to address COVID-19 and health & safety. By purchasing a Yankees ticket, you accept these Terms and Conditions and policies applicable to use. Visit yankees.com/ticketback. All ticket verification QR codes will appear 48 hrs prior to the scheduled start of the game. All individual game ticket prices are subject to variable and dynamic pricing, which provide fans with more price options based on changing factors that affect market demand.",
      "priceRanges": [
        { "type": "standard", "currency": "USD", "min": 10.0, "max": 510.0 }
      ],
      "seatmap": {
        "staticUrl": "https://maps.ticketmaster.com/maps/geometry/3/event/1D005D19E4AF4898/staticImage?type=png&systemId=HOST"
      },
      "accessibility": {
        "info": "Yankee Stadium management strives to provide an accessible environment for all its Guests. Wheelchair accessible and aisle-transfer (semi-ambulatory) seats are offered at various price points and locations, pending availability, throughout the Stadium and include the Yankees Premium seat locations. The Stadium also offers enhanced accessibility for Guests with hearing loss or low vision and for Guests who are deaf or blind. \r\nPlease select the location or price point as indicated in your search that best fits your needs to view available options. You may then select and purchase seats that are available through Ticketmaster. \r\nNotwithstanding, if you would like more details or if you have any questions regarding wheelchair accessible and/or aisle-transfer seating, you may contact Disabled Services at Yankee Stadium at (718) 579-4510 (voice) or (718) 579-4595 (TTY) or email disabledservices@yankees.com.",
        "ticketLimit": 19
      },
      "ticketLimit": {
        "info": "Only a LIMITED number of Tickets (as determined by the Yankees in its sole and absolute discretion) will be made available during the presale. Maximum of nine (9) Tickets to each potential game scheduled to be played during the 2023 Regular Season."
      },
      "ageRestrictions": { "legalAgeEnforced": false },
      "ticketing": {
        "safeTix": { "enabled": true },
        "allInclusivePricing": { "enabled": false }
      },
      "_links": {
        "self": { "href": "/discovery/v2/events/G5vVZ9oE0lVxb?locale=en-us" },
        "attractions": [
          { "href": "/discovery/v2/attractions/K8vZ9171okV?locale=en-us" },
          { "href": "/discovery/v2/attractions/K8vZ91718W0?locale=en-us" }
        ],
        "venues": [
          { "href": "/discovery/v2/venues/KovZpZA6t77A?locale=en-us" }
        ]
      },
      "_embedded": {
        "venues": [
          {
            "name": "Yankee Stadium",
            "type": "venue",
            "id": "KovZpZA6t77A",
            "test": false,
            "url": "https://www.ticketmaster.com/yankee-stadium-tickets-bronx/venue/237572",
            "locale": "en-us",
            "images": [
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dbimages/16603v.jpg",
                "width": 205,
                "height": 115,
                "fallback": false
              }
            ],
            "postalCode": "10451",
            "timezone": "America/New_York",
            "city": { "name": "Bronx" },
            "state": { "name": "New York", "stateCode": "NY" },
            "country": {
              "name": "United States Of America",
              "countryCode": "US"
            },
            "address": { "line1": "1 East 161st Street" },
            "location": {
              "longitude": "-73.9276264",
              "latitude": "40.8285237"
            },
            "markets": [
              { "name": "New York/Tri-State Area", "id": "35" },
              { "name": "Northern New Jersey", "id": "55" },
              { "name": "Connecticut", "id": "124" }
            ],
            "dmas": [{ "id": 296 }, { "id": 345 }, { "id": 422 }],
            "boxOfficeInfo": {
              "openHoursDetail": "Please check yankees.com for updated information including a Yankee Stadium Ticket Office schedule."
            },
            "parkingDetail": "PREPAID PARKING The Yankees neither control nor operate the parking lots and garages surrounding the Stadium and are not responsible for setting parking lot rates, refund policies, rules and/or procedures. Quik Park was granted those rights, including responsibility for establishing and controlling parking rates, refund policies, rules and/or procedures, by New York City.",
            "upcomingEvents": {
              "ticketmaster": 692,
              "_total": 692,
              "_filtered": 0
            },
            "ada": {
              "adaPhones": "Disabled Services at Yankee Stadium: (718) 579-4510 (voice) or (718) 579-4595 (TTY) \nEmail disabledservices@yankees.com.\n",
              "adaCustomCopy": "Yankee Stadium management strives to provide an accessible environment for all its Guests. Wheelchair accessible and aisle-transfer (semi-ambulatory) seats are offered at various price points and locations, pending availability, throughout the Stadium and include the Yankees Premium seat locations. The Stadium also offers enhanced accessibility for Guests with hearing loss or low vision and for Guests who are deaf or blind. \nPlease select the location or price point as indicated in your search that best fits your needs to view available options.  You may then select and purchase seats that are available through Ticketmaster including its website.  \nNotwithstanding, if you would like more details or if you have any questions regarding wheelchair accessible and/or aisle-transfer seating, you may contact Disabled Services at Yankee Stadium at (718) 579-4510 (voice) or (718) 579-4595 (TTY) or email disabledservices@yankees.com.\n\n",
              "adaHours": "Please check yankees.com for updated information including a Yankee Stadium Ticket Office schedule.\n"
            },
            "_links": {
              "self": {
                "href": "/discovery/v2/venues/KovZpZA6t77A?locale=en-us"
              }
            }
          }
        ],
        "attractions": [
          {
            "name": "New York Yankees",
            "type": "attraction",
            "id": "K8vZ9171okV",
            "test": false,
            "url": "https://www.ticketmaster.com/new-york-yankees-tickets/artist/805992",
            "locale": "en-us",
            "externalLinks": {
              "twitter": [{ "url": "https://twitter.com/Yankees" }],
              "wiki": [
                { "url": "https://en.wikipedia.org/wiki/New_York_Yankees" }
              ],
              "facebook": [{ "url": "https://www.facebook.com/Yankees" }],
              "instagram": [{ "url": "https://www.instagram.com/yankees" }],
              "homepage": [{ "url": "https://www.mlb.com/yankees" }]
            },
            "images": [
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RETINA_LANDSCAPE_16_9.jpg",
                "width": 1136,
                "height": 639,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RECOMENDATION_16_9.jpg",
                "width": 100,
                "height": 56,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_TABLET_LANDSCAPE_16_9.jpg",
                "width": 1024,
                "height": 576,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_TABLET_LANDSCAPE_3_2.jpg",
                "width": 1024,
                "height": 683,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_EVENT_DETAIL_PAGE_16_9.jpg",
                "width": 205,
                "height": 115,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RETINA_PORTRAIT_16_9.jpg",
                "width": 640,
                "height": 360,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RETINA_PORTRAIT_3_2.jpg",
                "width": 640,
                "height": 427,
                "fallback": false
              },
              {
                "ratio": "4_3",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_CUSTOM.jpg",
                "width": 305,
                "height": 225,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_ARTIST_PAGE_3_2.jpg",
                "width": 305,
                "height": 203,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                "width": 2048,
                "height": 1152,
                "fallback": false
              }
            ],
            "classifications": [
              {
                "primary": true,
                "segment": { "id": "KZFzniwnSyZfZ7v7nE", "name": "Sports" },
                "genre": { "id": "KnvZfZ7vAdv", "name": "Baseball" },
                "subGenre": { "id": "KZazBEonSMnZfZ7vF1n", "name": "MLB" },
                "type": { "id": "KZAyXgnZfZ7v7l1", "name": "Group" },
                "subType": { "id": "KZFzBErXgnZfZ7vA7d", "name": "Team" },
                "family": false
              }
            ],
            "upcomingEvents": {
              "tmr": 29,
              "ticketmaster": 133,
              "_total": 162,
              "_filtered": 0
            },
            "_links": {
              "self": {
                "href": "/discovery/v2/attractions/K8vZ9171okV?locale=en-us"
              }
            }
          },
          {
            "name": "Toronto Blue Jays",
            "type": "attraction",
            "id": "K8vZ91718W0",
            "test": false,
            "url": "https://www.ticketmaster.com/toronto-blue-jays-tickets/artist/806032",
            "locale": "en-us",
            "externalLinks": {
              "twitter": [{ "url": "https://twitter.com/Bluejays" }],
              "wiki": [
                { "url": "https://en.wikipedia.org/wiki/Toronto_Blue_Jays" }
              ],
              "facebook": [{ "url": "https://www.facebook.com/Bluejays" }],
              "instagram": [{ "url": "https://www.instagram.com/bluejays" }],
              "homepage": [{ "url": "https://www.mlb.com/bluejays" }]
            },
            "images": [
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/b7f/fa06b34f-1ba4-40e4-bedb-0f0970ea1b7f_1343191_RETINA_LANDSCAPE_16_9.jpg",
                "width": 1136,
                "height": 639,
                "fallback": false
              },
              {
                "ratio": "4_3",
                "url": "https://s1.ticketm.net/dam/a/b7f/fa06b34f-1ba4-40e4-bedb-0f0970ea1b7f_1343191_CUSTOM.jpg",
                "width": 305,
                "height": 225,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/b7f/fa06b34f-1ba4-40e4-bedb-0f0970ea1b7f_1343191_TABLET_LANDSCAPE_3_2.jpg",
                "width": 1024,
                "height": 683,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/b7f/fa06b34f-1ba4-40e4-bedb-0f0970ea1b7f_1343191_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                "width": 2048,
                "height": 1152,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/b7f/fa06b34f-1ba4-40e4-bedb-0f0970ea1b7f_1343191_ARTIST_PAGE_3_2.jpg",
                "width": 305,
                "height": 203,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/b7f/fa06b34f-1ba4-40e4-bedb-0f0970ea1b7f_1343191_RETINA_PORTRAIT_3_2.jpg",
                "width": 640,
                "height": 427,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/b7f/fa06b34f-1ba4-40e4-bedb-0f0970ea1b7f_1343191_EVENT_DETAIL_PAGE_16_9.jpg",
                "width": 205,
                "height": 115,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/b7f/fa06b34f-1ba4-40e4-bedb-0f0970ea1b7f_1343191_RETINA_PORTRAIT_16_9.jpg",
                "width": 640,
                "height": 360,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/b7f/fa06b34f-1ba4-40e4-bedb-0f0970ea1b7f_1343191_TABLET_LANDSCAPE_16_9.jpg",
                "width": 1024,
                "height": 576,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/b7f/fa06b34f-1ba4-40e4-bedb-0f0970ea1b7f_1343191_RECOMENDATION_16_9.jpg",
                "width": 100,
                "height": 56,
                "fallback": false
              }
            ],
            "classifications": [
              {
                "primary": true,
                "segment": { "id": "KZFzniwnSyZfZ7v7nE", "name": "Sports" },
                "genre": { "id": "KnvZfZ7vAdv", "name": "Baseball" },
                "subGenre": { "id": "KZazBEonSMnZfZ7vF1n", "name": "MLB" },
                "type": { "id": "KZAyXgnZfZ7v7l1", "name": "Group" },
                "subType": { "id": "KZFzBErXgnZfZ7vA7d", "name": "Team" },
                "family": false
              }
            ],
            "upcomingEvents": {
              "tmr": 23,
              "ticketmaster": 99,
              "_total": 122,
              "_filtered": 0
            },
            "_links": {
              "self": {
                "href": "/discovery/v2/attractions/K8vZ91718W0?locale=en-us"
              }
            }
          }
        ]
      }
    },
    {
      "name": "New York Yankees vs. Kansas City Royals",
      "type": "event",
      "id": "G5vVZ9oE0x0Ou",
      "test": false,
      "url": "https://www.ticketmaster.com/new-york-yankees-vs-kansas-city-bronx-new-york-07-21-2023/event/1D005D19E48A480D",
      "locale": "en-us",
      "images": [
        {
          "ratio": "16_9",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RETINA_LANDSCAPE_16_9.jpg",
          "width": 1136,
          "height": 639,
          "fallback": false
        },
        {
          "ratio": "16_9",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RECOMENDATION_16_9.jpg",
          "width": 100,
          "height": 56,
          "fallback": false
        },
        {
          "ratio": "16_9",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_TABLET_LANDSCAPE_16_9.jpg",
          "width": 1024,
          "height": 576,
          "fallback": false
        },
        {
          "ratio": "3_2",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_TABLET_LANDSCAPE_3_2.jpg",
          "width": 1024,
          "height": 683,
          "fallback": false
        },
        {
          "ratio": "16_9",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_EVENT_DETAIL_PAGE_16_9.jpg",
          "width": 205,
          "height": 115,
          "fallback": false
        },
        {
          "ratio": "16_9",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RETINA_PORTRAIT_16_9.jpg",
          "width": 640,
          "height": 360,
          "fallback": false
        },
        {
          "ratio": "3_2",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RETINA_PORTRAIT_3_2.jpg",
          "width": 640,
          "height": 427,
          "fallback": false
        },
        {
          "ratio": "4_3",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_CUSTOM.jpg",
          "width": 305,
          "height": 225,
          "fallback": false
        },
        {
          "ratio": "3_2",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_ARTIST_PAGE_3_2.jpg",
          "width": 305,
          "height": 203,
          "fallback": false
        },
        {
          "ratio": "16_9",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_TABLET_LANDSCAPE_LARGE_16_9.jpg",
          "width": 2048,
          "height": 1152,
          "fallback": false
        }
      ],
      "sales": {
        "public": {
          "startDateTime": "2022-09-14T14:00:00Z",
          "startTBD": false,
          "startTBA": false,
          "endDateTime": "2023-07-22T00:05:00Z"
        },
        "presales": [
          {
            "startDateTime": "2022-09-13T14:00:00Z",
            "endDateTime": "2022-09-13T16:00:00Z",
            "name": "NY Yankees Season Ticket Licensees"
          },
          {
            "startDateTime": "2022-09-13T15:00:00Z",
            "endDateTime": "2022-09-13T16:00:00Z",
            "name": "NY Yankees Past Buyers"
          },
          {
            "startDateTime": "2022-09-13T16:00:00Z",
            "endDateTime": "2022-09-14T02:00:00Z",
            "name": "Mastercard Cardholders"
          }
        ]
      },
      "dates": {
        "start": {
          "localDate": "2023-07-21",
          "localTime": "19:05:00",
          "dateTime": "2023-07-21T23:05:00Z",
          "dateTBD": false,
          "dateTBA": false,
          "timeTBA": false,
          "noSpecificTime": false
        },
        "timezone": "America/New_York",
        "status": { "code": "onsale" },
        "spanMultipleDays": false
      },
      "classifications": [
        {
          "primary": true,
          "segment": { "id": "KZFzniwnSyZfZ7v7nE", "name": "Sports" },
          "genre": { "id": "KnvZfZ7vAdv", "name": "Baseball" },
          "subGenre": { "id": "KZazBEonSMnZfZ7vF1n", "name": "MLB" },
          "type": { "id": "KZAyXgnZfZ7v7l1", "name": "Group" },
          "subType": { "id": "KZFzBErXgnZfZ7vA7d", "name": "Team" },
          "family": false
        }
      ],
      "promoter": {
        "id": "685",
        "name": "MLB REGULAR SEASON",
        "description": "MLB REGULAR SEASON / NTL / USA"
      },
      "promoters": [
        {
          "id": "685",
          "name": "MLB REGULAR SEASON",
          "description": "MLB REGULAR SEASON / NTL / USA"
        }
      ],
      "info": "Please adhere to published limits. Persons who exceed the ticket limit may have any or all of their orders and tickets cancelled without notice by Ticketmaster in its discretion. This includes orders associated with the same name, e-mail, billing address, credit card number or other information. If you purchase tickets, you may receive customer service messages via email from the New York Yankees, including optional surveys regarding your baseball experience. Ticket holder assumes all risk of injury from balls and bats entering the stands. Please note that protective netting of varying heights is used in the Stadium from Section 011 to behind home plate to Section 029. For more information, please visit yankees.com/netting. The number of innings in a regulation game shall be determined by MLB and may be shortened in accordance with MLB rules. Licensor makes no representation, warranty and/or guarantee that nine (9) innings will be played in any regulation game.",
      "pleaseNote": "The terms and conditions of your ticket and policies applicable to use are updated to address COVID-19 and health & safety. By purchasing a Yankees ticket, you accept these Terms and Conditions and policies applicable to use. Visit yankees.com/ticketback. All ticket verification QR codes will appear 48 hrs prior to the scheduled start of the game. All individual game ticket prices are subject to variable and dynamic pricing, which provide fans with more price options based on changing factors that affect market demand.",
      "priceRanges": [
        { "type": "standard", "currency": "USD", "min": 40.0, "max": 510.0 }
      ],
      "seatmap": {
        "staticUrl": "https://maps.ticketmaster.com/maps/geometry/3/event/1D005D19E48A480D/staticImage?type=png&systemId=HOST"
      },
      "accessibility": {
        "info": "Yankee Stadium management strives to provide an accessible environment for all its Guests. Wheelchair accessible and aisle-transfer (semi-ambulatory) seats are offered at various price points and locations, pending availability, throughout the Stadium and include the Yankees Premium seat locations. The Stadium also offers enhanced accessibility for Guests with hearing loss or low vision and for Guests who are deaf or blind. \r\nPlease select the location or price point as indicated in your search that best fits your needs to view available options. You may then select and purchase seats that are available through Ticketmaster. \r\nNotwithstanding, if you would like more details or if you have any questions regarding wheelchair accessible and/or aisle-transfer seating, you may contact Disabled Services at Yankee Stadium at (718) 579-4510 (voice) or (718) 579-4595 (TTY) or email disabledservices@yankees.com.",
        "ticketLimit": 19
      },
      "ticketLimit": {
        "info": "Only a LIMITED number of Tickets (as determined by the Yankees in its sole and absolute discretion) will be made available during the presale. Maximum of nine (9) Tickets to each potential game scheduled to be played during the 2023 Regular Season."
      },
      "ageRestrictions": { "legalAgeEnforced": false },
      "ticketing": {
        "safeTix": { "enabled": true },
        "allInclusivePricing": { "enabled": false }
      },
      "_links": {
        "self": { "href": "/discovery/v2/events/G5vVZ9oE0x0Ou?locale=en-us" },
        "attractions": [
          { "href": "/discovery/v2/attractions/K8vZ9171okV?locale=en-us" },
          { "href": "/discovery/v2/attractions/K8vZ9171oF7?locale=en-us" }
        ],
        "venues": [
          { "href": "/discovery/v2/venues/KovZpZA6t77A?locale=en-us" }
        ]
      },
      "_embedded": {
        "venues": [
          {
            "name": "Yankee Stadium",
            "type": "venue",
            "id": "KovZpZA6t77A",
            "test": false,
            "url": "https://www.ticketmaster.com/yankee-stadium-tickets-bronx/venue/237572",
            "locale": "en-us",
            "images": [
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dbimages/16603v.jpg",
                "width": 205,
                "height": 115,
                "fallback": false
              }
            ],
            "postalCode": "10451",
            "timezone": "America/New_York",
            "city": { "name": "Bronx" },
            "state": { "name": "New York", "stateCode": "NY" },
            "country": {
              "name": "United States Of America",
              "countryCode": "US"
            },
            "address": { "line1": "1 East 161st Street" },
            "location": {
              "longitude": "-73.9276264",
              "latitude": "40.8285237"
            },
            "markets": [
              { "name": "New York/Tri-State Area", "id": "35" },
              { "name": "Northern New Jersey", "id": "55" },
              { "name": "Connecticut", "id": "124" }
            ],
            "dmas": [{ "id": 296 }, { "id": 345 }, { "id": 422 }],
            "boxOfficeInfo": {
              "openHoursDetail": "Please check yankees.com for updated information including a Yankee Stadium Ticket Office schedule."
            },
            "parkingDetail": "PREPAID PARKING The Yankees neither control nor operate the parking lots and garages surrounding the Stadium and are not responsible for setting parking lot rates, refund policies, rules and/or procedures. Quik Park was granted those rights, including responsibility for establishing and controlling parking rates, refund policies, rules and/or procedures, by New York City.",
            "upcomingEvents": {
              "ticketmaster": 692,
              "_total": 692,
              "_filtered": 0
            },
            "ada": {
              "adaPhones": "Disabled Services at Yankee Stadium: (718) 579-4510 (voice) or (718) 579-4595 (TTY) \nEmail disabledservices@yankees.com.\n",
              "adaCustomCopy": "Yankee Stadium management strives to provide an accessible environment for all its Guests. Wheelchair accessible and aisle-transfer (semi-ambulatory) seats are offered at various price points and locations, pending availability, throughout the Stadium and include the Yankees Premium seat locations. The Stadium also offers enhanced accessibility for Guests with hearing loss or low vision and for Guests who are deaf or blind. \nPlease select the location or price point as indicated in your search that best fits your needs to view available options.  You may then select and purchase seats that are available through Ticketmaster including its website.  \nNotwithstanding, if you would like more details or if you have any questions regarding wheelchair accessible and/or aisle-transfer seating, you may contact Disabled Services at Yankee Stadium at (718) 579-4510 (voice) or (718) 579-4595 (TTY) or email disabledservices@yankees.com.\n\n",
              "adaHours": "Please check yankees.com for updated information including a Yankee Stadium Ticket Office schedule.\n"
            },
            "_links": {
              "self": {
                "href": "/discovery/v2/venues/KovZpZA6t77A?locale=en-us"
              }
            }
          }
        ],
        "attractions": [
          {
            "name": "New York Yankees",
            "type": "attraction",
            "id": "K8vZ9171okV",
            "test": false,
            "url": "https://www.ticketmaster.com/new-york-yankees-tickets/artist/805992",
            "locale": "en-us",
            "externalLinks": {
              "twitter": [{ "url": "https://twitter.com/Yankees" }],
              "wiki": [
                { "url": "https://en.wikipedia.org/wiki/New_York_Yankees" }
              ],
              "facebook": [{ "url": "https://www.facebook.com/Yankees" }],
              "instagram": [{ "url": "https://www.instagram.com/yankees" }],
              "homepage": [{ "url": "https://www.mlb.com/yankees" }]
            },
            "images": [
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RETINA_LANDSCAPE_16_9.jpg",
                "width": 1136,
                "height": 639,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RECOMENDATION_16_9.jpg",
                "width": 100,
                "height": 56,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_TABLET_LANDSCAPE_16_9.jpg",
                "width": 1024,
                "height": 576,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_TABLET_LANDSCAPE_3_2.jpg",
                "width": 1024,
                "height": 683,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_EVENT_DETAIL_PAGE_16_9.jpg",
                "width": 205,
                "height": 115,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RETINA_PORTRAIT_16_9.jpg",
                "width": 640,
                "height": 360,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RETINA_PORTRAIT_3_2.jpg",
                "width": 640,
                "height": 427,
                "fallback": false
              },
              {
                "ratio": "4_3",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_CUSTOM.jpg",
                "width": 305,
                "height": 225,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_ARTIST_PAGE_3_2.jpg",
                "width": 305,
                "height": 203,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                "width": 2048,
                "height": 1152,
                "fallback": false
              }
            ],
            "classifications": [
              {
                "primary": true,
                "segment": { "id": "KZFzniwnSyZfZ7v7nE", "name": "Sports" },
                "genre": { "id": "KnvZfZ7vAdv", "name": "Baseball" },
                "subGenre": { "id": "KZazBEonSMnZfZ7vF1n", "name": "MLB" },
                "type": { "id": "KZAyXgnZfZ7v7l1", "name": "Group" },
                "subType": { "id": "KZFzBErXgnZfZ7vA7d", "name": "Team" },
                "family": false
              }
            ],
            "upcomingEvents": {
              "tmr": 29,
              "ticketmaster": 133,
              "_total": 162,
              "_filtered": 0
            },
            "_links": {
              "self": {
                "href": "/discovery/v2/attractions/K8vZ9171okV?locale=en-us"
              }
            }
          },
          {
            "name": "Kansas City Royals",
            "type": "attraction",
            "id": "K8vZ9171oF7",
            "test": false,
            "url": "https://www.ticketmaster.com/kansas-city-royals-tickets/artist/805956",
            "locale": "en-us",
            "externalLinks": {
              "twitter": [{ "url": "https://twitter.com/Royals" }],
              "wiki": [
                { "url": "https://en.wikipedia.org/wiki/Kansas_City_Royals" }
              ],
              "facebook": [{ "url": "https://www.facebook.com/Royals" }],
              "instagram": [{ "url": "https://www.instagram.com/kcroyals" }],
              "homepage": [{ "url": "https://www.mlb.com/royals" }]
            },
            "images": [
              {
                "ratio": "4_3",
                "url": "https://s1.ticketm.net/dam/a/1cb/05793336-2377-4369-ad8a-6aa9b445c1cb_1344091_CUSTOM.jpg",
                "width": 305,
                "height": 225,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/1cb/05793336-2377-4369-ad8a-6aa9b445c1cb_1344091_ARTIST_PAGE_3_2.jpg",
                "width": 305,
                "height": 203,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/1cb/05793336-2377-4369-ad8a-6aa9b445c1cb_1344091_EVENT_DETAIL_PAGE_16_9.jpg",
                "width": 205,
                "height": 115,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/1cb/05793336-2377-4369-ad8a-6aa9b445c1cb_1344091_RETINA_LANDSCAPE_16_9.jpg",
                "width": 1136,
                "height": 639,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/1cb/05793336-2377-4369-ad8a-6aa9b445c1cb_1344091_TABLET_LANDSCAPE_16_9.jpg",
                "width": 1024,
                "height": 576,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/1cb/05793336-2377-4369-ad8a-6aa9b445c1cb_1344091_RECOMENDATION_16_9.jpg",
                "width": 100,
                "height": 56,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/1cb/05793336-2377-4369-ad8a-6aa9b445c1cb_1344091_RETINA_PORTRAIT_16_9.jpg",
                "width": 640,
                "height": 360,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/1cb/05793336-2377-4369-ad8a-6aa9b445c1cb_1344091_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                "width": 2048,
                "height": 1152,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/1cb/05793336-2377-4369-ad8a-6aa9b445c1cb_1344091_RETINA_PORTRAIT_3_2.jpg",
                "width": 640,
                "height": 427,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/1cb/05793336-2377-4369-ad8a-6aa9b445c1cb_1344091_TABLET_LANDSCAPE_3_2.jpg",
                "width": 1024,
                "height": 683,
                "fallback": false
              }
            ],
            "classifications": [
              {
                "primary": true,
                "segment": { "id": "KZFzniwnSyZfZ7v7nE", "name": "Sports" },
                "genre": { "id": "KnvZfZ7vAdv", "name": "Baseball" },
                "subGenre": { "id": "KZazBEonSMnZfZ7vF1n", "name": "MLB" },
                "type": { "id": "KZAyXgnZfZ7v7l1", "name": "Group" },
                "subType": { "id": "KZFzBErXgnZfZ7vA7d", "name": "Team" },
                "family": false
              }
            ],
            "upcomingEvents": {
              "tmr": 60,
              "ticketmaster": 33,
              "_total": 93,
              "_filtered": 0
            },
            "_links": {
              "self": {
                "href": "/discovery/v2/attractions/K8vZ9171oF7?locale=en-us"
              }
            }
          }
        ]
      }
    },
    {
      "name": "New York Yankees vs. Kansas City Royals",
      "type": "event",
      "id": "G5vVZ9oE0N7O4",
      "test": false,
      "url": "https://www.ticketmaster.com/new-york-yankees-vs-kansas-city-bronx-new-york-07-23-2023/event/1D005D19E48C4815",
      "locale": "en-us",
      "images": [
        {
          "ratio": "16_9",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RETINA_LANDSCAPE_16_9.jpg",
          "width": 1136,
          "height": 639,
          "fallback": false
        },
        {
          "ratio": "16_9",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RECOMENDATION_16_9.jpg",
          "width": 100,
          "height": 56,
          "fallback": false
        },
        {
          "ratio": "16_9",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_TABLET_LANDSCAPE_16_9.jpg",
          "width": 1024,
          "height": 576,
          "fallback": false
        },
        {
          "ratio": "3_2",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_TABLET_LANDSCAPE_3_2.jpg",
          "width": 1024,
          "height": 683,
          "fallback": false
        },
        {
          "ratio": "16_9",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_EVENT_DETAIL_PAGE_16_9.jpg",
          "width": 205,
          "height": 115,
          "fallback": false
        },
        {
          "ratio": "16_9",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RETINA_PORTRAIT_16_9.jpg",
          "width": 640,
          "height": 360,
          "fallback": false
        },
        {
          "ratio": "3_2",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RETINA_PORTRAIT_3_2.jpg",
          "width": 640,
          "height": 427,
          "fallback": false
        },
        {
          "ratio": "4_3",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_CUSTOM.jpg",
          "width": 305,
          "height": 225,
          "fallback": false
        },
        {
          "ratio": "3_2",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_ARTIST_PAGE_3_2.jpg",
          "width": 305,
          "height": 203,
          "fallback": false
        },
        {
          "ratio": "16_9",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_TABLET_LANDSCAPE_LARGE_16_9.jpg",
          "width": 2048,
          "height": 1152,
          "fallback": false
        }
      ],
      "sales": {
        "public": {
          "startDateTime": "2022-09-14T14:00:00Z",
          "startTBD": false,
          "startTBA": false,
          "endDateTime": "2023-07-23T18:35:00Z"
        },
        "presales": [
          {
            "startDateTime": "2022-09-13T14:00:00Z",
            "endDateTime": "2022-09-13T16:00:00Z",
            "name": "NY Yankees Season Ticket Licensees"
          },
          {
            "startDateTime": "2022-09-13T15:00:00Z",
            "endDateTime": "2022-09-13T16:00:00Z",
            "name": "NY Yankees Past Buyers"
          },
          {
            "startDateTime": "2022-09-13T16:00:00Z",
            "endDateTime": "2022-09-14T02:00:00Z",
            "name": "Mastercard Cardholders"
          }
        ]
      },
      "dates": {
        "start": {
          "localDate": "2023-07-23",
          "localTime": "13:35:00",
          "dateTime": "2023-07-23T17:35:00Z",
          "dateTBD": false,
          "dateTBA": false,
          "timeTBA": false,
          "noSpecificTime": false
        },
        "timezone": "America/New_York",
        "status": { "code": "onsale" },
        "spanMultipleDays": false
      },
      "classifications": [
        {
          "primary": true,
          "segment": { "id": "KZFzniwnSyZfZ7v7nE", "name": "Sports" },
          "genre": { "id": "KnvZfZ7vAdv", "name": "Baseball" },
          "subGenre": { "id": "KZazBEonSMnZfZ7vF1n", "name": "MLB" },
          "type": { "id": "KZAyXgnZfZ7v7l1", "name": "Group" },
          "subType": { "id": "KZFzBErXgnZfZ7vA7d", "name": "Team" },
          "family": false
        }
      ],
      "promoter": {
        "id": "685",
        "name": "MLB REGULAR SEASON",
        "description": "MLB REGULAR SEASON / NTL / USA"
      },
      "promoters": [
        {
          "id": "685",
          "name": "MLB REGULAR SEASON",
          "description": "MLB REGULAR SEASON / NTL / USA"
        }
      ],
      "info": "Please adhere to published limits. Persons who exceed the ticket limit may have any or all of their orders and tickets cancelled without notice by Ticketmaster in its discretion. This includes orders associated with the same name, e-mail, billing address, credit card number or other information. If you purchase tickets, you may receive customer service messages via email from the New York Yankees, including optional surveys regarding your baseball experience. Ticket holder assumes all risk of injury from balls and bats entering the stands. Please note that protective netting of varying heights is used in the Stadium from Section 011 to behind home plate to Section 029. For more information, please visit yankees.com/netting. The number of innings in a regulation game shall be determined by MLB and may be shortened in accordance with MLB rules. Licensor makes no representation, warranty and/or guarantee that nine (9) innings will be played in any regulation game.",
      "pleaseNote": "The terms and conditions of your ticket and policies applicable to use are updated to address COVID-19 and health & safety. By purchasing a Yankees ticket, you accept these Terms and Conditions and policies applicable to use. Visit yankees.com/ticketback. All ticket verification QR codes will appear 48 hrs prior to the scheduled start of the game. All individual game ticket prices are subject to variable and dynamic pricing, which provide fans with more price options based on changing factors that affect market demand.",
      "priceRanges": [
        { "type": "standard", "currency": "USD", "min": 25.0, "max": 510.0 }
      ],
      "seatmap": {
        "staticUrl": "https://maps.ticketmaster.com/maps/geometry/3/event/1D005D19E48C4815/staticImage?type=png&systemId=HOST"
      },
      "accessibility": {
        "info": "Yankee Stadium management strives to provide an accessible environment for all its Guests. Wheelchair accessible and aisle-transfer (semi-ambulatory) seats are offered at various price points and locations, pending availability, throughout the Stadium and include the Yankees Premium seat locations. The Stadium also offers enhanced accessibility for Guests with hearing loss or low vision and for Guests who are deaf or blind. \r\nPlease select the location or price point as indicated in your search that best fits your needs to view available options. You may then select and purchase seats that are available through Ticketmaster. \r\nNotwithstanding, if you would like more details or if you have any questions regarding wheelchair accessible and/or aisle-transfer seating, you may contact Disabled Services at Yankee Stadium at (718) 579-4510 (voice) or (718) 579-4595 (TTY) or email disabledservices@yankees.com.",
        "ticketLimit": 19
      },
      "ticketLimit": {
        "info": "Only a LIMITED number of Tickets (as determined by the Yankees in its sole and absolute discretion) will be made available during the presale. Maximum of nine (9) Tickets to each potential game scheduled to be played during the 2023 Regular Season."
      },
      "ageRestrictions": { "legalAgeEnforced": false },
      "ticketing": {
        "safeTix": { "enabled": true },
        "allInclusivePricing": { "enabled": false }
      },
      "_links": {
        "self": { "href": "/discovery/v2/events/G5vVZ9oE0N7O4?locale=en-us" },
        "attractions": [
          { "href": "/discovery/v2/attractions/K8vZ9171okV?locale=en-us" },
          { "href": "/discovery/v2/attractions/K8vZ9171oF7?locale=en-us" }
        ],
        "venues": [
          { "href": "/discovery/v2/venues/KovZpZA6t77A?locale=en-us" }
        ]
      },
      "_embedded": {
        "venues": [
          {
            "name": "Yankee Stadium",
            "type": "venue",
            "id": "KovZpZA6t77A",
            "test": false,
            "url": "https://www.ticketmaster.com/yankee-stadium-tickets-bronx/venue/237572",
            "locale": "en-us",
            "images": [
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dbimages/16603v.jpg",
                "width": 205,
                "height": 115,
                "fallback": false
              }
            ],
            "postalCode": "10451",
            "timezone": "America/New_York",
            "city": { "name": "Bronx" },
            "state": { "name": "New York", "stateCode": "NY" },
            "country": {
              "name": "United States Of America",
              "countryCode": "US"
            },
            "address": { "line1": "1 East 161st Street" },
            "location": {
              "longitude": "-73.9276264",
              "latitude": "40.8285237"
            },
            "markets": [
              { "name": "New York/Tri-State Area", "id": "35" },
              { "name": "Northern New Jersey", "id": "55" },
              { "name": "Connecticut", "id": "124" }
            ],
            "dmas": [{ "id": 296 }, { "id": 345 }, { "id": 422 }],
            "boxOfficeInfo": {
              "openHoursDetail": "Please check yankees.com for updated information including a Yankee Stadium Ticket Office schedule."
            },
            "parkingDetail": "PREPAID PARKING The Yankees neither control nor operate the parking lots and garages surrounding the Stadium and are not responsible for setting parking lot rates, refund policies, rules and/or procedures. Quik Park was granted those rights, including responsibility for establishing and controlling parking rates, refund policies, rules and/or procedures, by New York City.",
            "upcomingEvents": {
              "ticketmaster": 692,
              "_total": 692,
              "_filtered": 0
            },
            "ada": {
              "adaPhones": "Disabled Services at Yankee Stadium: (718) 579-4510 (voice) or (718) 579-4595 (TTY) \nEmail disabledservices@yankees.com.\n",
              "adaCustomCopy": "Yankee Stadium management strives to provide an accessible environment for all its Guests. Wheelchair accessible and aisle-transfer (semi-ambulatory) seats are offered at various price points and locations, pending availability, throughout the Stadium and include the Yankees Premium seat locations. The Stadium also offers enhanced accessibility for Guests with hearing loss or low vision and for Guests who are deaf or blind. \nPlease select the location or price point as indicated in your search that best fits your needs to view available options.  You may then select and purchase seats that are available through Ticketmaster including its website.  \nNotwithstanding, if you would like more details or if you have any questions regarding wheelchair accessible and/or aisle-transfer seating, you may contact Disabled Services at Yankee Stadium at (718) 579-4510 (voice) or (718) 579-4595 (TTY) or email disabledservices@yankees.com.\n\n",
              "adaHours": "Please check yankees.com for updated information including a Yankee Stadium Ticket Office schedule.\n"
            },
            "_links": {
              "self": {
                "href": "/discovery/v2/venues/KovZpZA6t77A?locale=en-us"
              }
            }
          }
        ],
        "attractions": [
          {
            "name": "New York Yankees",
            "type": "attraction",
            "id": "K8vZ9171okV",
            "test": false,
            "url": "https://www.ticketmaster.com/new-york-yankees-tickets/artist/805992",
            "locale": "en-us",
            "externalLinks": {
              "twitter": [{ "url": "https://twitter.com/Yankees" }],
              "wiki": [
                { "url": "https://en.wikipedia.org/wiki/New_York_Yankees" }
              ],
              "facebook": [{ "url": "https://www.facebook.com/Yankees" }],
              "instagram": [{ "url": "https://www.instagram.com/yankees" }],
              "homepage": [{ "url": "https://www.mlb.com/yankees" }]
            },
            "images": [
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RETINA_LANDSCAPE_16_9.jpg",
                "width": 1136,
                "height": 639,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RECOMENDATION_16_9.jpg",
                "width": 100,
                "height": 56,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_TABLET_LANDSCAPE_16_9.jpg",
                "width": 1024,
                "height": 576,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_TABLET_LANDSCAPE_3_2.jpg",
                "width": 1024,
                "height": 683,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_EVENT_DETAIL_PAGE_16_9.jpg",
                "width": 205,
                "height": 115,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RETINA_PORTRAIT_16_9.jpg",
                "width": 640,
                "height": 360,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RETINA_PORTRAIT_3_2.jpg",
                "width": 640,
                "height": 427,
                "fallback": false
              },
              {
                "ratio": "4_3",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_CUSTOM.jpg",
                "width": 305,
                "height": 225,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_ARTIST_PAGE_3_2.jpg",
                "width": 305,
                "height": 203,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                "width": 2048,
                "height": 1152,
                "fallback": false
              }
            ],
            "classifications": [
              {
                "primary": true,
                "segment": { "id": "KZFzniwnSyZfZ7v7nE", "name": "Sports" },
                "genre": { "id": "KnvZfZ7vAdv", "name": "Baseball" },
                "subGenre": { "id": "KZazBEonSMnZfZ7vF1n", "name": "MLB" },
                "type": { "id": "KZAyXgnZfZ7v7l1", "name": "Group" },
                "subType": { "id": "KZFzBErXgnZfZ7vA7d", "name": "Team" },
                "family": false
              }
            ],
            "upcomingEvents": {
              "tmr": 29,
              "ticketmaster": 133,
              "_total": 162,
              "_filtered": 0
            },
            "_links": {
              "self": {
                "href": "/discovery/v2/attractions/K8vZ9171okV?locale=en-us"
              }
            }
          },
          {
            "name": "Kansas City Royals",
            "type": "attraction",
            "id": "K8vZ9171oF7",
            "test": false,
            "url": "https://www.ticketmaster.com/kansas-city-royals-tickets/artist/805956",
            "locale": "en-us",
            "externalLinks": {
              "twitter": [{ "url": "https://twitter.com/Royals" }],
              "wiki": [
                { "url": "https://en.wikipedia.org/wiki/Kansas_City_Royals" }
              ],
              "facebook": [{ "url": "https://www.facebook.com/Royals" }],
              "instagram": [{ "url": "https://www.instagram.com/kcroyals" }],
              "homepage": [{ "url": "https://www.mlb.com/royals" }]
            },
            "images": [
              {
                "ratio": "4_3",
                "url": "https://s1.ticketm.net/dam/a/1cb/05793336-2377-4369-ad8a-6aa9b445c1cb_1344091_CUSTOM.jpg",
                "width": 305,
                "height": 225,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/1cb/05793336-2377-4369-ad8a-6aa9b445c1cb_1344091_ARTIST_PAGE_3_2.jpg",
                "width": 305,
                "height": 203,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/1cb/05793336-2377-4369-ad8a-6aa9b445c1cb_1344091_EVENT_DETAIL_PAGE_16_9.jpg",
                "width": 205,
                "height": 115,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/1cb/05793336-2377-4369-ad8a-6aa9b445c1cb_1344091_RETINA_LANDSCAPE_16_9.jpg",
                "width": 1136,
                "height": 639,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/1cb/05793336-2377-4369-ad8a-6aa9b445c1cb_1344091_TABLET_LANDSCAPE_16_9.jpg",
                "width": 1024,
                "height": 576,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/1cb/05793336-2377-4369-ad8a-6aa9b445c1cb_1344091_RECOMENDATION_16_9.jpg",
                "width": 100,
                "height": 56,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/1cb/05793336-2377-4369-ad8a-6aa9b445c1cb_1344091_RETINA_PORTRAIT_16_9.jpg",
                "width": 640,
                "height": 360,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/1cb/05793336-2377-4369-ad8a-6aa9b445c1cb_1344091_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                "width": 2048,
                "height": 1152,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/1cb/05793336-2377-4369-ad8a-6aa9b445c1cb_1344091_RETINA_PORTRAIT_3_2.jpg",
                "width": 640,
                "height": 427,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/1cb/05793336-2377-4369-ad8a-6aa9b445c1cb_1344091_TABLET_LANDSCAPE_3_2.jpg",
                "width": 1024,
                "height": 683,
                "fallback": false
              }
            ],
            "classifications": [
              {
                "primary": true,
                "segment": { "id": "KZFzniwnSyZfZ7v7nE", "name": "Sports" },
                "genre": { "id": "KnvZfZ7vAdv", "name": "Baseball" },
                "subGenre": { "id": "KZazBEonSMnZfZ7vF1n", "name": "MLB" },
                "type": { "id": "KZAyXgnZfZ7v7l1", "name": "Group" },
                "subType": { "id": "KZFzBErXgnZfZ7vA7d", "name": "Team" },
                "family": false
              }
            ],
            "upcomingEvents": {
              "tmr": 60,
              "ticketmaster": 33,
              "_total": 93,
              "_filtered": 0
            },
            "_links": {
              "self": {
                "href": "/discovery/v2/attractions/K8vZ9171oF7?locale=en-us"
              }
            }
          }
        ]
      }
    },
    {
      "name": "New York Yankees vs. Kansas City Royals",
      "type": "event",
      "id": "G5vVZ9oE0xVOK",
      "test": false,
      "url": "https://www.ticketmaster.com/new-york-yankees-vs-kansas-city-bronx-new-york-07-22-2023/event/1D005D19E48B4813",
      "locale": "en-us",
      "images": [
        {
          "ratio": "16_9",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RETINA_LANDSCAPE_16_9.jpg",
          "width": 1136,
          "height": 639,
          "fallback": false
        },
        {
          "ratio": "16_9",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RECOMENDATION_16_9.jpg",
          "width": 100,
          "height": 56,
          "fallback": false
        },
        {
          "ratio": "16_9",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_TABLET_LANDSCAPE_16_9.jpg",
          "width": 1024,
          "height": 576,
          "fallback": false
        },
        {
          "ratio": "3_2",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_TABLET_LANDSCAPE_3_2.jpg",
          "width": 1024,
          "height": 683,
          "fallback": false
        },
        {
          "ratio": "16_9",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_EVENT_DETAIL_PAGE_16_9.jpg",
          "width": 205,
          "height": 115,
          "fallback": false
        },
        {
          "ratio": "16_9",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RETINA_PORTRAIT_16_9.jpg",
          "width": 640,
          "height": 360,
          "fallback": false
        },
        {
          "ratio": "3_2",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RETINA_PORTRAIT_3_2.jpg",
          "width": 640,
          "height": 427,
          "fallback": false
        },
        {
          "ratio": "4_3",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_CUSTOM.jpg",
          "width": 305,
          "height": 225,
          "fallback": false
        },
        {
          "ratio": "3_2",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_ARTIST_PAGE_3_2.jpg",
          "width": 305,
          "height": 203,
          "fallback": false
        },
        {
          "ratio": "16_9",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_TABLET_LANDSCAPE_LARGE_16_9.jpg",
          "width": 2048,
          "height": 1152,
          "fallback": false
        }
      ],
      "sales": {
        "public": {
          "startDateTime": "2022-09-14T14:00:00Z",
          "startTBD": false,
          "startTBA": false,
          "endDateTime": "2023-07-22T18:05:00Z"
        },
        "presales": [
          {
            "startDateTime": "2022-09-13T14:00:00Z",
            "endDateTime": "2022-09-13T16:00:00Z",
            "name": "NY Yankees Season Ticket Licensees"
          },
          {
            "startDateTime": "2022-09-13T15:00:00Z",
            "endDateTime": "2022-09-13T16:00:00Z",
            "name": "NY Yankees Past Buyers"
          },
          {
            "startDateTime": "2022-09-13T16:00:00Z",
            "endDateTime": "2022-09-14T02:00:00Z",
            "name": "Mastercard Cardholders"
          }
        ]
      },
      "dates": {
        "start": {
          "localDate": "2023-07-22",
          "localTime": "13:05:00",
          "dateTime": "2023-07-22T17:05:00Z",
          "dateTBD": false,
          "dateTBA": false,
          "timeTBA": false,
          "noSpecificTime": false
        },
        "timezone": "America/New_York",
        "status": { "code": "onsale" },
        "spanMultipleDays": false
      },
      "classifications": [
        {
          "primary": true,
          "segment": { "id": "KZFzniwnSyZfZ7v7nE", "name": "Sports" },
          "genre": { "id": "KnvZfZ7vAdv", "name": "Baseball" },
          "subGenre": { "id": "KZazBEonSMnZfZ7vF1n", "name": "MLB" },
          "type": { "id": "KZAyXgnZfZ7v7l1", "name": "Group" },
          "subType": { "id": "KZFzBErXgnZfZ7vA7d", "name": "Team" },
          "family": false
        }
      ],
      "promoter": {
        "id": "685",
        "name": "MLB REGULAR SEASON",
        "description": "MLB REGULAR SEASON / NTL / USA"
      },
      "promoters": [
        {
          "id": "685",
          "name": "MLB REGULAR SEASON",
          "description": "MLB REGULAR SEASON / NTL / USA"
        }
      ],
      "info": "Please adhere to published limits. Persons who exceed the ticket limit may have any or all of their orders and tickets cancelled without notice by Ticketmaster in its discretion. This includes orders associated with the same name, e-mail, billing address, credit card number or other information. If you purchase tickets, you may receive customer service messages via email from the New York Yankees, including optional surveys regarding your baseball experience. Ticket holder assumes all risk of injury from balls and bats entering the stands. Please note that protective netting of varying heights is used in the Stadium from Section 011 to behind home plate to Section 029. For more information, please visit yankees.com/netting. The number of innings in a regulation game shall be determined by MLB and may be shortened in accordance with MLB rules. Licensor makes no representation, warranty and/or guarantee that nine (9) innings will be played in any regulation game.",
      "pleaseNote": "The terms and conditions of your ticket and policies applicable to use are updated to address COVID-19 and health & safety. By purchasing a Yankees ticket, you accept these Terms and Conditions and policies applicable to use. Visit yankees.com/ticketback. All ticket verification QR codes will appear 48 hrs prior to the scheduled start of the game. All individual game ticket prices are subject to variable and dynamic pricing, which provide fans with more price options based on changing factors that affect market demand.",
      "priceRanges": [
        { "type": "standard", "currency": "USD", "min": 30.0, "max": 510.0 }
      ],
      "seatmap": {
        "staticUrl": "https://maps.ticketmaster.com/maps/geometry/3/event/1D005D19E48B4813/staticImage?type=png&systemId=HOST"
      },
      "accessibility": {
        "info": "Yankee Stadium management strives to provide an accessible environment for all its Guests. Wheelchair accessible and aisle-transfer (semi-ambulatory) seats are offered at various price points and locations, pending availability, throughout the Stadium and include the Yankees Premium seat locations. The Stadium also offers enhanced accessibility for Guests with hearing loss or low vision and for Guests who are deaf or blind. \r\nPlease select the location or price point as indicated in your search that best fits your needs to view available options. You may then select and purchase seats that are available through Ticketmaster. \r\nNotwithstanding, if you would like more details or if you have any questions regarding wheelchair accessible and/or aisle-transfer seating, you may contact Disabled Services at Yankee Stadium at (718) 579-4510 (voice) or (718) 579-4595 (TTY) or email disabledservices@yankees.com.",
        "ticketLimit": 19
      },
      "ticketLimit": {
        "info": "Only a LIMITED number of Tickets (as determined by the Yankees in its sole and absolute discretion) will be made available during the presale. Maximum of nine (9) Tickets to each potential game scheduled to be played during the 2023 Regular Season."
      },
      "ageRestrictions": { "legalAgeEnforced": false },
      "ticketing": {
        "safeTix": { "enabled": true },
        "allInclusivePricing": { "enabled": false }
      },
      "_links": {
        "self": { "href": "/discovery/v2/events/G5vVZ9oE0xVOK?locale=en-us" },
        "attractions": [
          { "href": "/discovery/v2/attractions/K8vZ9171okV?locale=en-us" },
          { "href": "/discovery/v2/attractions/K8vZ9171oF7?locale=en-us" }
        ],
        "venues": [
          { "href": "/discovery/v2/venues/KovZpZA6t77A?locale=en-us" }
        ]
      },
      "_embedded": {
        "venues": [
          {
            "name": "Yankee Stadium",
            "type": "venue",
            "id": "KovZpZA6t77A",
            "test": false,
            "url": "https://www.ticketmaster.com/yankee-stadium-tickets-bronx/venue/237572",
            "locale": "en-us",
            "images": [
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dbimages/16603v.jpg",
                "width": 205,
                "height": 115,
                "fallback": false
              }
            ],
            "postalCode": "10451",
            "timezone": "America/New_York",
            "city": { "name": "Bronx" },
            "state": { "name": "New York", "stateCode": "NY" },
            "country": {
              "name": "United States Of America",
              "countryCode": "US"
            },
            "address": { "line1": "1 East 161st Street" },
            "location": {
              "longitude": "-73.9276264",
              "latitude": "40.8285237"
            },
            "markets": [
              { "name": "New York/Tri-State Area", "id": "35" },
              { "name": "Northern New Jersey", "id": "55" },
              { "name": "Connecticut", "id": "124" }
            ],
            "dmas": [{ "id": 296 }, { "id": 345 }, { "id": 422 }],
            "boxOfficeInfo": {
              "openHoursDetail": "Please check yankees.com for updated information including a Yankee Stadium Ticket Office schedule."
            },
            "parkingDetail": "PREPAID PARKING The Yankees neither control nor operate the parking lots and garages surrounding the Stadium and are not responsible for setting parking lot rates, refund policies, rules and/or procedures. Quik Park was granted those rights, including responsibility for establishing and controlling parking rates, refund policies, rules and/or procedures, by New York City.",
            "upcomingEvents": {
              "ticketmaster": 692,
              "_total": 692,
              "_filtered": 0
            },
            "ada": {
              "adaPhones": "Disabled Services at Yankee Stadium: (718) 579-4510 (voice) or (718) 579-4595 (TTY) \nEmail disabledservices@yankees.com.\n",
              "adaCustomCopy": "Yankee Stadium management strives to provide an accessible environment for all its Guests. Wheelchair accessible and aisle-transfer (semi-ambulatory) seats are offered at various price points and locations, pending availability, throughout the Stadium and include the Yankees Premium seat locations. The Stadium also offers enhanced accessibility for Guests with hearing loss or low vision and for Guests who are deaf or blind. \nPlease select the location or price point as indicated in your search that best fits your needs to view available options.  You may then select and purchase seats that are available through Ticketmaster including its website.  \nNotwithstanding, if you would like more details or if you have any questions regarding wheelchair accessible and/or aisle-transfer seating, you may contact Disabled Services at Yankee Stadium at (718) 579-4510 (voice) or (718) 579-4595 (TTY) or email disabledservices@yankees.com.\n\n",
              "adaHours": "Please check yankees.com for updated information including a Yankee Stadium Ticket Office schedule.\n"
            },
            "_links": {
              "self": {
                "href": "/discovery/v2/venues/KovZpZA6t77A?locale=en-us"
              }
            }
          }
        ],
        "attractions": [
          {
            "name": "New York Yankees",
            "type": "attraction",
            "id": "K8vZ9171okV",
            "test": false,
            "url": "https://www.ticketmaster.com/new-york-yankees-tickets/artist/805992",
            "locale": "en-us",
            "externalLinks": {
              "twitter": [{ "url": "https://twitter.com/Yankees" }],
              "wiki": [
                { "url": "https://en.wikipedia.org/wiki/New_York_Yankees" }
              ],
              "facebook": [{ "url": "https://www.facebook.com/Yankees" }],
              "instagram": [{ "url": "https://www.instagram.com/yankees" }],
              "homepage": [{ "url": "https://www.mlb.com/yankees" }]
            },
            "images": [
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RETINA_LANDSCAPE_16_9.jpg",
                "width": 1136,
                "height": 639,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RECOMENDATION_16_9.jpg",
                "width": 100,
                "height": 56,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_TABLET_LANDSCAPE_16_9.jpg",
                "width": 1024,
                "height": 576,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_TABLET_LANDSCAPE_3_2.jpg",
                "width": 1024,
                "height": 683,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_EVENT_DETAIL_PAGE_16_9.jpg",
                "width": 205,
                "height": 115,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RETINA_PORTRAIT_16_9.jpg",
                "width": 640,
                "height": 360,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RETINA_PORTRAIT_3_2.jpg",
                "width": 640,
                "height": 427,
                "fallback": false
              },
              {
                "ratio": "4_3",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_CUSTOM.jpg",
                "width": 305,
                "height": 225,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_ARTIST_PAGE_3_2.jpg",
                "width": 305,
                "height": 203,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                "width": 2048,
                "height": 1152,
                "fallback": false
              }
            ],
            "classifications": [
              {
                "primary": true,
                "segment": { "id": "KZFzniwnSyZfZ7v7nE", "name": "Sports" },
                "genre": { "id": "KnvZfZ7vAdv", "name": "Baseball" },
                "subGenre": { "id": "KZazBEonSMnZfZ7vF1n", "name": "MLB" },
                "type": { "id": "KZAyXgnZfZ7v7l1", "name": "Group" },
                "subType": { "id": "KZFzBErXgnZfZ7vA7d", "name": "Team" },
                "family": false
              }
            ],
            "upcomingEvents": {
              "tmr": 29,
              "ticketmaster": 133,
              "_total": 162,
              "_filtered": 0
            },
            "_links": {
              "self": {
                "href": "/discovery/v2/attractions/K8vZ9171okV?locale=en-us"
              }
            }
          },
          {
            "name": "Kansas City Royals",
            "type": "attraction",
            "id": "K8vZ9171oF7",
            "test": false,
            "url": "https://www.ticketmaster.com/kansas-city-royals-tickets/artist/805956",
            "locale": "en-us",
            "externalLinks": {
              "twitter": [{ "url": "https://twitter.com/Royals" }],
              "wiki": [
                { "url": "https://en.wikipedia.org/wiki/Kansas_City_Royals" }
              ],
              "facebook": [{ "url": "https://www.facebook.com/Royals" }],
              "instagram": [{ "url": "https://www.instagram.com/kcroyals" }],
              "homepage": [{ "url": "https://www.mlb.com/royals" }]
            },
            "images": [
              {
                "ratio": "4_3",
                "url": "https://s1.ticketm.net/dam/a/1cb/05793336-2377-4369-ad8a-6aa9b445c1cb_1344091_CUSTOM.jpg",
                "width": 305,
                "height": 225,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/1cb/05793336-2377-4369-ad8a-6aa9b445c1cb_1344091_ARTIST_PAGE_3_2.jpg",
                "width": 305,
                "height": 203,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/1cb/05793336-2377-4369-ad8a-6aa9b445c1cb_1344091_EVENT_DETAIL_PAGE_16_9.jpg",
                "width": 205,
                "height": 115,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/1cb/05793336-2377-4369-ad8a-6aa9b445c1cb_1344091_RETINA_LANDSCAPE_16_9.jpg",
                "width": 1136,
                "height": 639,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/1cb/05793336-2377-4369-ad8a-6aa9b445c1cb_1344091_TABLET_LANDSCAPE_16_9.jpg",
                "width": 1024,
                "height": 576,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/1cb/05793336-2377-4369-ad8a-6aa9b445c1cb_1344091_RECOMENDATION_16_9.jpg",
                "width": 100,
                "height": 56,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/1cb/05793336-2377-4369-ad8a-6aa9b445c1cb_1344091_RETINA_PORTRAIT_16_9.jpg",
                "width": 640,
                "height": 360,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/1cb/05793336-2377-4369-ad8a-6aa9b445c1cb_1344091_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                "width": 2048,
                "height": 1152,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/1cb/05793336-2377-4369-ad8a-6aa9b445c1cb_1344091_RETINA_PORTRAIT_3_2.jpg",
                "width": 640,
                "height": 427,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/1cb/05793336-2377-4369-ad8a-6aa9b445c1cb_1344091_TABLET_LANDSCAPE_3_2.jpg",
                "width": 1024,
                "height": 683,
                "fallback": false
              }
            ],
            "classifications": [
              {
                "primary": true,
                "segment": { "id": "KZFzniwnSyZfZ7v7nE", "name": "Sports" },
                "genre": { "id": "KnvZfZ7vAdv", "name": "Baseball" },
                "subGenre": { "id": "KZazBEonSMnZfZ7vF1n", "name": "MLB" },
                "type": { "id": "KZAyXgnZfZ7v7l1", "name": "Group" },
                "subType": { "id": "KZFzBErXgnZfZ7vA7d", "name": "Team" },
                "family": false
              }
            ],
            "upcomingEvents": {
              "tmr": 60,
              "ticketmaster": 33,
              "_total": 93,
              "_filtered": 0
            },
            "_links": {
              "self": {
                "href": "/discovery/v2/attractions/K8vZ9171oF7?locale=en-us"
              }
            }
          }
        ]
      }
    },
    {
      "name": "New York Yankees vs. Arizona Diamondbacks",
      "type": "event",
      "id": "G5vVZ9oE0c7NA",
      "test": false,
      "url": "https://www.ticketmaster.com/new-york-yankees-vs-arizona-diamondbacks-bronx-new-york-09-23-2023/event/1D005D19E4B448C5",
      "locale": "en-us",
      "images": [
        {
          "ratio": "16_9",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RETINA_LANDSCAPE_16_9.jpg",
          "width": 1136,
          "height": 639,
          "fallback": false
        },
        {
          "ratio": "16_9",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RECOMENDATION_16_9.jpg",
          "width": 100,
          "height": 56,
          "fallback": false
        },
        {
          "ratio": "16_9",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_TABLET_LANDSCAPE_16_9.jpg",
          "width": 1024,
          "height": 576,
          "fallback": false
        },
        {
          "ratio": "3_2",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_TABLET_LANDSCAPE_3_2.jpg",
          "width": 1024,
          "height": 683,
          "fallback": false
        },
        {
          "ratio": "16_9",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_EVENT_DETAIL_PAGE_16_9.jpg",
          "width": 205,
          "height": 115,
          "fallback": false
        },
        {
          "ratio": "16_9",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RETINA_PORTRAIT_16_9.jpg",
          "width": 640,
          "height": 360,
          "fallback": false
        },
        {
          "ratio": "3_2",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RETINA_PORTRAIT_3_2.jpg",
          "width": 640,
          "height": 427,
          "fallback": false
        },
        {
          "ratio": "4_3",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_CUSTOM.jpg",
          "width": 305,
          "height": 225,
          "fallback": false
        },
        {
          "ratio": "3_2",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_ARTIST_PAGE_3_2.jpg",
          "width": 305,
          "height": 203,
          "fallback": false
        },
        {
          "ratio": "16_9",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_TABLET_LANDSCAPE_LARGE_16_9.jpg",
          "width": 2048,
          "height": 1152,
          "fallback": false
        }
      ],
      "sales": {
        "public": {
          "startDateTime": "2022-09-14T14:00:00Z",
          "startTBD": false,
          "startTBA": false,
          "endDateTime": "2023-09-23T18:05:00Z"
        },
        "presales": [
          {
            "startDateTime": "2022-09-13T14:00:00Z",
            "endDateTime": "2022-09-13T16:00:00Z",
            "name": "NY Yankees Season Ticket Licensees"
          },
          {
            "startDateTime": "2022-09-13T15:00:00Z",
            "endDateTime": "2022-09-13T16:00:00Z",
            "name": "NY Yankees Past Buyers"
          },
          {
            "startDateTime": "2022-09-13T16:00:00Z",
            "endDateTime": "2022-09-14T02:00:00Z",
            "name": "Mastercard Cardholders"
          },
          {
            "startDateTime": "2022-11-18T15:00:00Z",
            "endDateTime": "2022-12-24T04:59:00Z",
            "name": "Me + 3 Promotional Offer",
            "description": "Special Offers on 4 Tickets!"
          }
        ]
      },
      "dates": {
        "start": {
          "localDate": "2023-09-23",
          "localTime": "13:05:00",
          "dateTime": "2023-09-23T17:05:00Z",
          "dateTBD": false,
          "dateTBA": false,
          "timeTBA": false,
          "noSpecificTime": false
        },
        "timezone": "America/New_York",
        "status": { "code": "onsale" },
        "spanMultipleDays": false
      },
      "classifications": [
        {
          "primary": true,
          "segment": { "id": "KZFzniwnSyZfZ7v7nE", "name": "Sports" },
          "genre": { "id": "KnvZfZ7vAdv", "name": "Baseball" },
          "subGenre": { "id": "KZazBEonSMnZfZ7vF1n", "name": "MLB" },
          "type": { "id": "KZAyXgnZfZ7v7l1", "name": "Group" },
          "subType": { "id": "KZFzBErXgnZfZ7vA7d", "name": "Team" },
          "family": false
        }
      ],
      "promoter": {
        "id": "685",
        "name": "MLB REGULAR SEASON",
        "description": "MLB REGULAR SEASON / NTL / USA"
      },
      "promoters": [
        {
          "id": "685",
          "name": "MLB REGULAR SEASON",
          "description": "MLB REGULAR SEASON / NTL / USA"
        }
      ],
      "info": "Please adhere to published limits. Persons who exceed the ticket limit may have any or all of their orders and tickets cancelled without notice by Ticketmaster in its discretion. This includes orders associated with the same name, e-mail, billing address, credit card number or other information. If you purchase tickets, you may receive customer service messages via email from the New York Yankees, including optional surveys regarding your baseball experience. Ticket holder assumes all risk of injury from balls and bats entering the stands. Please note that protective netting of varying heights is used in the Stadium from Section 011 to behind home plate to Section 029. For more information, please visit yankees.com/netting. The number of innings in a regulation game shall be determined by MLB and may be shortened in accordance with MLB rules. Licensor makes no representation, warranty and/or guarantee that nine (9) innings will be played in any regulation game.",
      "pleaseNote": "The terms and conditions of your ticket and policies applicable to use are updated to address COVID-19 and health & safety. By purchasing a Yankees ticket, you accept these Terms and Conditions and policies applicable to use. Visit yankees.com/ticketback. All ticket verification QR codes will appear 48 hrs prior to the scheduled start of the game. All individual game ticket prices are subject to variable and dynamic pricing, which provide fans with more price options based on changing factors that affect market demand.",
      "priceRanges": [
        { "type": "standard", "currency": "USD", "min": 25.0, "max": 510.0 }
      ],
      "seatmap": {
        "staticUrl": "https://maps.ticketmaster.com/maps/geometry/3/event/1D005D19E4B448C5/staticImage?type=png&systemId=HOST"
      },
      "accessibility": {
        "info": "Yankee Stadium management strives to provide an accessible environment for all its Guests. Wheelchair accessible and aisle-transfer (semi-ambulatory) seats are offered at various price points and locations, pending availability, throughout the Stadium and include the Yankees Premium seat locations. The Stadium also offers enhanced accessibility for Guests with hearing loss or low vision and for Guests who are deaf or blind. \r\nPlease select the location or price point as indicated in your search that best fits your needs to view available options. You may then select and purchase seats that are available through Ticketmaster. \r\nNotwithstanding, if you would like more details or if you have any questions regarding wheelchair accessible and/or aisle-transfer seating, you may contact Disabled Services at Yankee Stadium at (718) 579-4510 (voice) or (718) 579-4595 (TTY) or email disabledservices@yankees.com.",
        "ticketLimit": 19
      },
      "ticketLimit": {
        "info": "Only a LIMITED number of Tickets (as determined by the Yankees in its sole and absolute discretion) will be made available during the presale. Maximum of nine (9) Tickets to each potential game scheduled to be played during the 2023 Regular Season."
      },
      "ageRestrictions": { "legalAgeEnforced": false },
      "ticketing": {
        "safeTix": { "enabled": true },
        "allInclusivePricing": { "enabled": false }
      },
      "_links": {
        "self": { "href": "/discovery/v2/events/G5vVZ9oE0c7NA?locale=en-us" },
        "attractions": [
          { "href": "/discovery/v2/attractions/K8vZ9171okV?locale=en-us" },
          { "href": "/discovery/v2/attractions/K8vZ9171bp7?locale=en-us" }
        ],
        "venues": [
          { "href": "/discovery/v2/venues/KovZpZA6t77A?locale=en-us" }
        ]
      },
      "_embedded": {
        "venues": [
          {
            "name": "Yankee Stadium",
            "type": "venue",
            "id": "KovZpZA6t77A",
            "test": false,
            "url": "https://www.ticketmaster.com/yankee-stadium-tickets-bronx/venue/237572",
            "locale": "en-us",
            "images": [
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dbimages/16603v.jpg",
                "width": 205,
                "height": 115,
                "fallback": false
              }
            ],
            "postalCode": "10451",
            "timezone": "America/New_York",
            "city": { "name": "Bronx" },
            "state": { "name": "New York", "stateCode": "NY" },
            "country": {
              "name": "United States Of America",
              "countryCode": "US"
            },
            "address": { "line1": "1 East 161st Street" },
            "location": {
              "longitude": "-73.9276264",
              "latitude": "40.8285237"
            },
            "markets": [
              { "name": "New York/Tri-State Area", "id": "35" },
              { "name": "Northern New Jersey", "id": "55" },
              { "name": "Connecticut", "id": "124" }
            ],
            "dmas": [{ "id": 296 }, { "id": 345 }, { "id": 422 }],
            "boxOfficeInfo": {
              "openHoursDetail": "Please check yankees.com for updated information including a Yankee Stadium Ticket Office schedule."
            },
            "parkingDetail": "PREPAID PARKING The Yankees neither control nor operate the parking lots and garages surrounding the Stadium and are not responsible for setting parking lot rates, refund policies, rules and/or procedures. Quik Park was granted those rights, including responsibility for establishing and controlling parking rates, refund policies, rules and/or procedures, by New York City.",
            "upcomingEvents": {
              "ticketmaster": 692,
              "_total": 692,
              "_filtered": 0
            },
            "ada": {
              "adaPhones": "Disabled Services at Yankee Stadium: (718) 579-4510 (voice) or (718) 579-4595 (TTY) \nEmail disabledservices@yankees.com.\n",
              "adaCustomCopy": "Yankee Stadium management strives to provide an accessible environment for all its Guests. Wheelchair accessible and aisle-transfer (semi-ambulatory) seats are offered at various price points and locations, pending availability, throughout the Stadium and include the Yankees Premium seat locations. The Stadium also offers enhanced accessibility for Guests with hearing loss or low vision and for Guests who are deaf or blind. \nPlease select the location or price point as indicated in your search that best fits your needs to view available options.  You may then select and purchase seats that are available through Ticketmaster including its website.  \nNotwithstanding, if you would like more details or if you have any questions regarding wheelchair accessible and/or aisle-transfer seating, you may contact Disabled Services at Yankee Stadium at (718) 579-4510 (voice) or (718) 579-4595 (TTY) or email disabledservices@yankees.com.\n\n",
              "adaHours": "Please check yankees.com for updated information including a Yankee Stadium Ticket Office schedule.\n"
            },
            "_links": {
              "self": {
                "href": "/discovery/v2/venues/KovZpZA6t77A?locale=en-us"
              }
            }
          }
        ],
        "attractions": [
          {
            "name": "New York Yankees",
            "type": "attraction",
            "id": "K8vZ9171okV",
            "test": false,
            "url": "https://www.ticketmaster.com/new-york-yankees-tickets/artist/805992",
            "locale": "en-us",
            "externalLinks": {
              "twitter": [{ "url": "https://twitter.com/Yankees" }],
              "wiki": [
                { "url": "https://en.wikipedia.org/wiki/New_York_Yankees" }
              ],
              "facebook": [{ "url": "https://www.facebook.com/Yankees" }],
              "instagram": [{ "url": "https://www.instagram.com/yankees" }],
              "homepage": [{ "url": "https://www.mlb.com/yankees" }]
            },
            "images": [
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RETINA_LANDSCAPE_16_9.jpg",
                "width": 1136,
                "height": 639,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RECOMENDATION_16_9.jpg",
                "width": 100,
                "height": 56,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_TABLET_LANDSCAPE_16_9.jpg",
                "width": 1024,
                "height": 576,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_TABLET_LANDSCAPE_3_2.jpg",
                "width": 1024,
                "height": 683,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_EVENT_DETAIL_PAGE_16_9.jpg",
                "width": 205,
                "height": 115,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RETINA_PORTRAIT_16_9.jpg",
                "width": 640,
                "height": 360,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RETINA_PORTRAIT_3_2.jpg",
                "width": 640,
                "height": 427,
                "fallback": false
              },
              {
                "ratio": "4_3",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_CUSTOM.jpg",
                "width": 305,
                "height": 225,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_ARTIST_PAGE_3_2.jpg",
                "width": 305,
                "height": 203,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                "width": 2048,
                "height": 1152,
                "fallback": false
              }
            ],
            "classifications": [
              {
                "primary": true,
                "segment": { "id": "KZFzniwnSyZfZ7v7nE", "name": "Sports" },
                "genre": { "id": "KnvZfZ7vAdv", "name": "Baseball" },
                "subGenre": { "id": "KZazBEonSMnZfZ7vF1n", "name": "MLB" },
                "type": { "id": "KZAyXgnZfZ7v7l1", "name": "Group" },
                "subType": { "id": "KZFzBErXgnZfZ7vA7d", "name": "Team" },
                "family": false
              }
            ],
            "upcomingEvents": {
              "tmr": 29,
              "ticketmaster": 133,
              "_total": 162,
              "_filtered": 0
            },
            "_links": {
              "self": {
                "href": "/discovery/v2/attractions/K8vZ9171okV?locale=en-us"
              }
            }
          },
          {
            "name": "Arizona Diamondbacks",
            "type": "attraction",
            "id": "K8vZ9171bp7",
            "test": false,
            "url": "https://www.ticketmaster.com/arizona-diamondbacks-tickets/artist/805895",
            "locale": "en-us",
            "externalLinks": {
              "twitter": [{ "url": "https://twitter.com/Dbacks" }],
              "wiki": [
                {
                  "url": "https://en.wikipedia.org/wiki/Arizona_Diamondbacks"
                }
              ],
              "facebook": [{ "url": "https://www.facebook.com/Dbacks/" }],
              "instagram": [{ "url": "https://www.instagram.com/dbacks" }],
              "homepage": [{ "url": "https://www.mlb.com/dbacks" }]
            },
            "aliases": ["dbacks"],
            "images": [
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/b94/2fd30063-94c2-4b49-ac2c-be074ff93b94_1344481_RECOMENDATION_16_9.jpg",
                "width": 100,
                "height": 56,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/b94/2fd30063-94c2-4b49-ac2c-be074ff93b94_1344481_RETINA_LANDSCAPE_16_9.jpg",
                "width": 1136,
                "height": 639,
                "fallback": false
              },
              {
                "ratio": "4_3",
                "url": "https://s1.ticketm.net/dam/a/b94/2fd30063-94c2-4b49-ac2c-be074ff93b94_1344481_CUSTOM.jpg",
                "width": 305,
                "height": 225,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/b94/2fd30063-94c2-4b49-ac2c-be074ff93b94_1344481_EVENT_DETAIL_PAGE_16_9.jpg",
                "width": 205,
                "height": 115,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/b94/2fd30063-94c2-4b49-ac2c-be074ff93b94_1344481_TABLET_LANDSCAPE_3_2.jpg",
                "width": 1024,
                "height": 683,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/b94/2fd30063-94c2-4b49-ac2c-be074ff93b94_1344481_RETINA_PORTRAIT_16_9.jpg",
                "width": 640,
                "height": 360,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/b94/2fd30063-94c2-4b49-ac2c-be074ff93b94_1344481_RETINA_PORTRAIT_3_2.jpg",
                "width": 640,
                "height": 427,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/b94/2fd30063-94c2-4b49-ac2c-be074ff93b94_1344481_TABLET_LANDSCAPE_16_9.jpg",
                "width": 1024,
                "height": 576,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/b94/2fd30063-94c2-4b49-ac2c-be074ff93b94_1344481_ARTIST_PAGE_3_2.jpg",
                "width": 305,
                "height": 203,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/b94/2fd30063-94c2-4b49-ac2c-be074ff93b94_1344481_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                "width": 2048,
                "height": 1152,
                "fallback": false
              }
            ],
            "classifications": [
              {
                "primary": true,
                "segment": { "id": "KZFzniwnSyZfZ7v7nE", "name": "Sports" },
                "genre": { "id": "KnvZfZ7vAdv", "name": "Baseball" },
                "subGenre": { "id": "KZazBEonSMnZfZ7vF1n", "name": "MLB" },
                "type": { "id": "KZAyXgnZfZ7v7l1", "name": "Group" },
                "subType": { "id": "KZFzBErXgnZfZ7vA7d", "name": "Team" },
                "family": false
              }
            ],
            "upcomingEvents": {
              "tmr": 21,
              "ticketmaster": 58,
              "_total": 79,
              "_filtered": 0
            },
            "_links": {
              "self": {
                "href": "/discovery/v2/attractions/K8vZ9171bp7?locale=en-us"
              }
            }
          }
        ]
      }
    },
    {
      "name": "New York Yankees vs. Houston Astros",
      "type": "event",
      "id": "G5vVZ9oE0PVOM",
      "test": false,
      "url": "https://www.ticketmaster.com/new-york-yankees-vs-houston-astros-bronx-new-york-08-04-2023/event/1D005D19E4974837",
      "locale": "en-us",
      "images": [
        {
          "ratio": "16_9",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RETINA_LANDSCAPE_16_9.jpg",
          "width": 1136,
          "height": 639,
          "fallback": false
        },
        {
          "ratio": "16_9",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RECOMENDATION_16_9.jpg",
          "width": 100,
          "height": 56,
          "fallback": false
        },
        {
          "ratio": "16_9",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_TABLET_LANDSCAPE_16_9.jpg",
          "width": 1024,
          "height": 576,
          "fallback": false
        },
        {
          "ratio": "3_2",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_TABLET_LANDSCAPE_3_2.jpg",
          "width": 1024,
          "height": 683,
          "fallback": false
        },
        {
          "ratio": "16_9",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_EVENT_DETAIL_PAGE_16_9.jpg",
          "width": 205,
          "height": 115,
          "fallback": false
        },
        {
          "ratio": "16_9",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RETINA_PORTRAIT_16_9.jpg",
          "width": 640,
          "height": 360,
          "fallback": false
        },
        {
          "ratio": "3_2",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RETINA_PORTRAIT_3_2.jpg",
          "width": 640,
          "height": 427,
          "fallback": false
        },
        {
          "ratio": "4_3",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_CUSTOM.jpg",
          "width": 305,
          "height": 225,
          "fallback": false
        },
        {
          "ratio": "3_2",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_ARTIST_PAGE_3_2.jpg",
          "width": 305,
          "height": 203,
          "fallback": false
        },
        {
          "ratio": "16_9",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_TABLET_LANDSCAPE_LARGE_16_9.jpg",
          "width": 2048,
          "height": 1152,
          "fallback": false
        }
      ],
      "sales": {
        "public": {
          "startDateTime": "2022-09-14T14:00:00Z",
          "startTBD": false,
          "startTBA": false,
          "endDateTime": "2023-08-05T00:05:00Z"
        },
        "presales": [
          {
            "startDateTime": "2022-09-13T14:00:00Z",
            "endDateTime": "2022-09-13T16:00:00Z",
            "name": "NY Yankees Season Ticket Licensees"
          },
          {
            "startDateTime": "2022-09-13T15:00:00Z",
            "endDateTime": "2022-09-13T16:00:00Z",
            "name": "NY Yankees Past Buyers"
          },
          {
            "startDateTime": "2022-09-13T16:00:00Z",
            "endDateTime": "2022-09-14T02:00:00Z",
            "name": "Mastercard Cardholders"
          }
        ]
      },
      "dates": {
        "start": {
          "localDate": "2023-08-04",
          "localTime": "19:05:00",
          "dateTime": "2023-08-04T23:05:00Z",
          "dateTBD": false,
          "dateTBA": false,
          "timeTBA": false,
          "noSpecificTime": false
        },
        "timezone": "America/New_York",
        "status": { "code": "onsale" },
        "spanMultipleDays": false
      },
      "classifications": [
        {
          "primary": true,
          "segment": { "id": "KZFzniwnSyZfZ7v7nE", "name": "Sports" },
          "genre": { "id": "KnvZfZ7vAdv", "name": "Baseball" },
          "subGenre": { "id": "KZazBEonSMnZfZ7vF1n", "name": "MLB" },
          "type": { "id": "KZAyXgnZfZ7v7l1", "name": "Group" },
          "subType": { "id": "KZFzBErXgnZfZ7vA7d", "name": "Team" },
          "family": false
        }
      ],
      "promoter": {
        "id": "685",
        "name": "MLB REGULAR SEASON",
        "description": "MLB REGULAR SEASON / NTL / USA"
      },
      "promoters": [
        {
          "id": "685",
          "name": "MLB REGULAR SEASON",
          "description": "MLB REGULAR SEASON / NTL / USA"
        }
      ],
      "info": "Please adhere to published limits. Persons who exceed the ticket limit may have any or all of their orders and tickets cancelled without notice by Ticketmaster in its discretion. This includes orders associated with the same name, e-mail, billing address, credit card number or other information. If you purchase tickets, you may receive customer service messages via email from the New York Yankees, including optional surveys regarding your baseball experience. Ticket holder assumes all risk of injury from balls and bats entering the stands. Please note that protective netting of varying heights is used in the Stadium from Section 011 to behind home plate to Section 029. For more information, please visit yankees.com/netting. The number of innings in a regulation game shall be determined by MLB and may be shortened in accordance with MLB rules. Licensor makes no representation, warranty and/or guarantee that nine (9) innings will be played in any regulation game.",
      "pleaseNote": "The terms and conditions of your ticket and policies applicable to use are updated to address COVID-19 and health & safety. By purchasing a Yankees ticket, you accept these Terms and Conditions and policies applicable to use. Visit yankees.com/ticketback. All ticket verification QR codes will appear 48 hrs prior to the scheduled start of the game. All individual game ticket prices are subject to variable and dynamic pricing, which provide fans with more price options based on changing factors that affect market demand.",
      "priceRanges": [
        { "type": "standard", "currency": "USD", "min": 25.0, "max": 510.0 }
      ],
      "seatmap": {
        "staticUrl": "https://maps.ticketmaster.com/maps/geometry/3/event/1D005D19E4974837/staticImage?type=png&systemId=HOST"
      },
      "accessibility": {
        "info": "Yankee Stadium management strives to provide an accessible environment for all its Guests. Wheelchair accessible and aisle-transfer (semi-ambulatory) seats are offered at various price points and locations, pending availability, throughout the Stadium and include the Yankees Premium seat locations. The Stadium also offers enhanced accessibility for Guests with hearing loss or low vision and for Guests who are deaf or blind. \r\nPlease select the location or price point as indicated in your search that best fits your needs to view available options. You may then select and purchase seats that are available through Ticketmaster. \r\nNotwithstanding, if you would like more details or if you have any questions regarding wheelchair accessible and/or aisle-transfer seating, you may contact Disabled Services at Yankee Stadium at (718) 579-4510 (voice) or (718) 579-4595 (TTY) or email disabledservices@yankees.com.",
        "ticketLimit": 19
      },
      "ticketLimit": {
        "info": "Only a LIMITED number of Tickets (as determined by the Yankees in its sole and absolute discretion) will be made available during the presale. Maximum of nine (9) Tickets to each potential game scheduled to be played during the 2023 Regular Season."
      },
      "ageRestrictions": { "legalAgeEnforced": false },
      "ticketing": {
        "safeTix": { "enabled": true },
        "allInclusivePricing": { "enabled": false }
      },
      "_links": {
        "self": { "href": "/discovery/v2/events/G5vVZ9oE0PVOM?locale=en-us" },
        "attractions": [
          { "href": "/discovery/v2/attractions/K8vZ9171okV?locale=en-us" },
          { "href": "/discovery/v2/attractions/K8vZ91718zV?locale=en-us" }
        ],
        "venues": [
          { "href": "/discovery/v2/venues/KovZpZA6t77A?locale=en-us" }
        ]
      },
      "_embedded": {
        "venues": [
          {
            "name": "Yankee Stadium",
            "type": "venue",
            "id": "KovZpZA6t77A",
            "test": false,
            "url": "https://www.ticketmaster.com/yankee-stadium-tickets-bronx/venue/237572",
            "locale": "en-us",
            "images": [
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dbimages/16603v.jpg",
                "width": 205,
                "height": 115,
                "fallback": false
              }
            ],
            "postalCode": "10451",
            "timezone": "America/New_York",
            "city": { "name": "Bronx" },
            "state": { "name": "New York", "stateCode": "NY" },
            "country": {
              "name": "United States Of America",
              "countryCode": "US"
            },
            "address": { "line1": "1 East 161st Street" },
            "location": {
              "longitude": "-73.9276264",
              "latitude": "40.8285237"
            },
            "markets": [
              { "name": "New York/Tri-State Area", "id": "35" },
              { "name": "Northern New Jersey", "id": "55" },
              { "name": "Connecticut", "id": "124" }
            ],
            "dmas": [{ "id": 296 }, { "id": 345 }, { "id": 422 }],
            "boxOfficeInfo": {
              "openHoursDetail": "Please check yankees.com for updated information including a Yankee Stadium Ticket Office schedule."
            },
            "parkingDetail": "PREPAID PARKING The Yankees neither control nor operate the parking lots and garages surrounding the Stadium and are not responsible for setting parking lot rates, refund policies, rules and/or procedures. Quik Park was granted those rights, including responsibility for establishing and controlling parking rates, refund policies, rules and/or procedures, by New York City.",
            "upcomingEvents": {
              "ticketmaster": 692,
              "_total": 692,
              "_filtered": 0
            },
            "ada": {
              "adaPhones": "Disabled Services at Yankee Stadium: (718) 579-4510 (voice) or (718) 579-4595 (TTY) \nEmail disabledservices@yankees.com.\n",
              "adaCustomCopy": "Yankee Stadium management strives to provide an accessible environment for all its Guests. Wheelchair accessible and aisle-transfer (semi-ambulatory) seats are offered at various price points and locations, pending availability, throughout the Stadium and include the Yankees Premium seat locations. The Stadium also offers enhanced accessibility for Guests with hearing loss or low vision and for Guests who are deaf or blind. \nPlease select the location or price point as indicated in your search that best fits your needs to view available options.  You may then select and purchase seats that are available through Ticketmaster including its website.  \nNotwithstanding, if you would like more details or if you have any questions regarding wheelchair accessible and/or aisle-transfer seating, you may contact Disabled Services at Yankee Stadium at (718) 579-4510 (voice) or (718) 579-4595 (TTY) or email disabledservices@yankees.com.\n\n",
              "adaHours": "Please check yankees.com for updated information including a Yankee Stadium Ticket Office schedule.\n"
            },
            "_links": {
              "self": {
                "href": "/discovery/v2/venues/KovZpZA6t77A?locale=en-us"
              }
            }
          }
        ],
        "attractions": [
          {
            "name": "New York Yankees",
            "type": "attraction",
            "id": "K8vZ9171okV",
            "test": false,
            "url": "https://www.ticketmaster.com/new-york-yankees-tickets/artist/805992",
            "locale": "en-us",
            "externalLinks": {
              "twitter": [{ "url": "https://twitter.com/Yankees" }],
              "wiki": [
                { "url": "https://en.wikipedia.org/wiki/New_York_Yankees" }
              ],
              "facebook": [{ "url": "https://www.facebook.com/Yankees" }],
              "instagram": [{ "url": "https://www.instagram.com/yankees" }],
              "homepage": [{ "url": "https://www.mlb.com/yankees" }]
            },
            "images": [
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RETINA_LANDSCAPE_16_9.jpg",
                "width": 1136,
                "height": 639,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RECOMENDATION_16_9.jpg",
                "width": 100,
                "height": 56,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_TABLET_LANDSCAPE_16_9.jpg",
                "width": 1024,
                "height": 576,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_TABLET_LANDSCAPE_3_2.jpg",
                "width": 1024,
                "height": 683,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_EVENT_DETAIL_PAGE_16_9.jpg",
                "width": 205,
                "height": 115,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RETINA_PORTRAIT_16_9.jpg",
                "width": 640,
                "height": 360,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RETINA_PORTRAIT_3_2.jpg",
                "width": 640,
                "height": 427,
                "fallback": false
              },
              {
                "ratio": "4_3",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_CUSTOM.jpg",
                "width": 305,
                "height": 225,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_ARTIST_PAGE_3_2.jpg",
                "width": 305,
                "height": 203,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                "width": 2048,
                "height": 1152,
                "fallback": false
              }
            ],
            "classifications": [
              {
                "primary": true,
                "segment": { "id": "KZFzniwnSyZfZ7v7nE", "name": "Sports" },
                "genre": { "id": "KnvZfZ7vAdv", "name": "Baseball" },
                "subGenre": { "id": "KZazBEonSMnZfZ7vF1n", "name": "MLB" },
                "type": { "id": "KZAyXgnZfZ7v7l1", "name": "Group" },
                "subType": { "id": "KZFzBErXgnZfZ7vA7d", "name": "Team" },
                "family": false
              }
            ],
            "upcomingEvents": {
              "tmr": 29,
              "ticketmaster": 133,
              "_total": 162,
              "_filtered": 0
            },
            "_links": {
              "self": {
                "href": "/discovery/v2/attractions/K8vZ9171okV?locale=en-us"
              }
            }
          },
          {
            "name": "Houston Astros",
            "type": "attraction",
            "id": "K8vZ91718zV",
            "test": false,
            "url": "https://www.ticketmaster.com/houston-astros-tickets/artist/805948",
            "locale": "en-us",
            "externalLinks": {
              "twitter": [{ "url": "https://twitter.com/astros" }],
              "wiki": [
                { "url": "https://en.wikipedia.org/wiki/Houston_Astros" }
              ],
              "facebook": [{ "url": "https://www.facebook.com/Astros" }],
              "instagram": [
                { "url": "https://www.instagram.com/astrosbaseball" }
              ],
              "homepage": [{ "url": "https://www.mlb.com/astros" }]
            },
            "aliases": ["World Series"],
            "images": [
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/645/f53abc7c-c1d5-4e8e-9513-0b407888c645_1343821_TABLET_LANDSCAPE_3_2.jpg",
                "width": 1024,
                "height": 683,
                "fallback": false
              },
              {
                "ratio": "4_3",
                "url": "https://s1.ticketm.net/dam/a/645/f53abc7c-c1d5-4e8e-9513-0b407888c645_1343821_CUSTOM.jpg",
                "width": 305,
                "height": 225,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/645/f53abc7c-c1d5-4e8e-9513-0b407888c645_1343821_TABLET_LANDSCAPE_16_9.jpg",
                "width": 1024,
                "height": 576,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/645/f53abc7c-c1d5-4e8e-9513-0b407888c645_1343821_RETINA_LANDSCAPE_16_9.jpg",
                "width": 1136,
                "height": 639,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/645/f53abc7c-c1d5-4e8e-9513-0b407888c645_1343821_RETINA_PORTRAIT_16_9.jpg",
                "width": 640,
                "height": 360,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/645/f53abc7c-c1d5-4e8e-9513-0b407888c645_1343821_RECOMENDATION_16_9.jpg",
                "width": 100,
                "height": 56,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/645/f53abc7c-c1d5-4e8e-9513-0b407888c645_1343821_EVENT_DETAIL_PAGE_16_9.jpg",
                "width": 205,
                "height": 115,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/645/f53abc7c-c1d5-4e8e-9513-0b407888c645_1343821_ARTIST_PAGE_3_2.jpg",
                "width": 305,
                "height": 203,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/645/f53abc7c-c1d5-4e8e-9513-0b407888c645_1343821_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                "width": 2048,
                "height": 1152,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/645/f53abc7c-c1d5-4e8e-9513-0b407888c645_1343821_RETINA_PORTRAIT_3_2.jpg",
                "width": 640,
                "height": 427,
                "fallback": false
              }
            ],
            "classifications": [
              {
                "primary": true,
                "segment": { "id": "KZFzniwnSyZfZ7v7nE", "name": "Sports" },
                "genre": { "id": "KnvZfZ7vAdv", "name": "Baseball" },
                "subGenre": { "id": "KZazBEonSMnZfZ7vF1n", "name": "MLB" },
                "type": { "id": "KZAyXgnZfZ7v7l1", "name": "Group" },
                "subType": { "id": "KZFzBErXgnZfZ7vA7d", "name": "Team" },
                "family": false
              }
            ],
            "upcomingEvents": {
              "tmr": 60,
              "ticketmaster": 38,
              "_total": 98,
              "_filtered": 0
            },
            "_links": {
              "self": {
                "href": "/discovery/v2/attractions/K8vZ91718zV?locale=en-us"
              }
            }
          }
        ]
      }
    },
    {
      "name": "New York Yankees vs. Boston Red Sox",
      "type": "event",
      "id": "G5vVZ9oE0E7-C",
      "test": false,
      "url": "https://www.ticketmaster.com/new-york-yankees-vs-boston-red-bronx-new-york-08-18-2023/event/1D005D19E49C484E",
      "locale": "en-us",
      "images": [
        {
          "ratio": "16_9",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RETINA_LANDSCAPE_16_9.jpg",
          "width": 1136,
          "height": 639,
          "fallback": false
        },
        {
          "ratio": "16_9",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RECOMENDATION_16_9.jpg",
          "width": 100,
          "height": 56,
          "fallback": false
        },
        {
          "ratio": "16_9",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_TABLET_LANDSCAPE_16_9.jpg",
          "width": 1024,
          "height": 576,
          "fallback": false
        },
        {
          "ratio": "3_2",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_TABLET_LANDSCAPE_3_2.jpg",
          "width": 1024,
          "height": 683,
          "fallback": false
        },
        {
          "ratio": "16_9",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_EVENT_DETAIL_PAGE_16_9.jpg",
          "width": 205,
          "height": 115,
          "fallback": false
        },
        {
          "ratio": "16_9",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RETINA_PORTRAIT_16_9.jpg",
          "width": 640,
          "height": 360,
          "fallback": false
        },
        {
          "ratio": "3_2",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RETINA_PORTRAIT_3_2.jpg",
          "width": 640,
          "height": 427,
          "fallback": false
        },
        {
          "ratio": "4_3",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_CUSTOM.jpg",
          "width": 305,
          "height": 225,
          "fallback": false
        },
        {
          "ratio": "3_2",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_ARTIST_PAGE_3_2.jpg",
          "width": 305,
          "height": 203,
          "fallback": false
        },
        {
          "ratio": "16_9",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_TABLET_LANDSCAPE_LARGE_16_9.jpg",
          "width": 2048,
          "height": 1152,
          "fallback": false
        }
      ],
      "sales": {
        "public": {
          "startDateTime": "2022-09-14T14:00:00Z",
          "startTBD": false,
          "startTBA": false,
          "endDateTime": "2023-08-19T00:05:00Z"
        },
        "presales": [
          {
            "startDateTime": "2022-09-13T14:00:00Z",
            "endDateTime": "2022-09-13T16:00:00Z",
            "name": "NY Yankees Season Ticket Licensees"
          },
          {
            "startDateTime": "2022-09-13T15:00:00Z",
            "endDateTime": "2022-09-13T16:00:00Z",
            "name": "NY Yankees Past Buyers"
          },
          {
            "startDateTime": "2022-09-13T16:00:00Z",
            "endDateTime": "2022-09-14T02:00:00Z",
            "name": "Mastercard Cardholders"
          }
        ]
      },
      "dates": {
        "start": {
          "localDate": "2023-08-18",
          "localTime": "19:05:00",
          "dateTime": "2023-08-18T23:05:00Z",
          "dateTBD": false,
          "dateTBA": false,
          "timeTBA": false,
          "noSpecificTime": false
        },
        "timezone": "America/New_York",
        "status": { "code": "onsale" },
        "spanMultipleDays": false
      },
      "classifications": [
        {
          "primary": true,
          "segment": { "id": "KZFzniwnSyZfZ7v7nE", "name": "Sports" },
          "genre": { "id": "KnvZfZ7vAdv", "name": "Baseball" },
          "subGenre": { "id": "KZazBEonSMnZfZ7vF1n", "name": "MLB" },
          "type": { "id": "KZAyXgnZfZ7v7l1", "name": "Group" },
          "subType": { "id": "KZFzBErXgnZfZ7vA7d", "name": "Team" },
          "family": false
        }
      ],
      "promoter": {
        "id": "685",
        "name": "MLB REGULAR SEASON",
        "description": "MLB REGULAR SEASON / NTL / USA"
      },
      "promoters": [
        {
          "id": "685",
          "name": "MLB REGULAR SEASON",
          "description": "MLB REGULAR SEASON / NTL / USA"
        }
      ],
      "info": "Please adhere to published limits. Persons who exceed the ticket limit may have any or all of their orders and tickets cancelled without notice by Ticketmaster in its discretion. This includes orders associated with the same name, e-mail, billing address, credit card number or other information. If you purchase tickets, you may receive customer service messages via email from the New York Yankees, including optional surveys regarding your baseball experience. Ticket holder assumes all risk of injury from balls and bats entering the stands. Please note that protective netting of varying heights is used in the Stadium from Section 011 to behind home plate to Section 029. For more information, please visit yankees.com/netting. The number of innings in a regulation game shall be determined by MLB and may be shortened in accordance with MLB rules. Licensor makes no representation, warranty and/or guarantee that nine (9) innings will be played in any regulation game.",
      "pleaseNote": "The terms and conditions of your ticket and policies applicable to use are updated to address COVID-19 and health & safety. By purchasing a Yankees ticket, you accept these Terms and Conditions and policies applicable to use. Visit yankees.com/ticketback. All ticket verification QR codes will appear 48 hrs prior to the scheduled start of the game. All individual game ticket prices are subject to variable and dynamic pricing, which provide fans with more price options based on changing factors that affect market demand.",
      "priceRanges": [
        { "type": "standard", "currency": "USD", "min": 45.0, "max": 525.0 }
      ],
      "seatmap": {
        "staticUrl": "https://maps.ticketmaster.com/maps/geometry/3/event/1D005D19E49C484E/staticImage?type=png&systemId=HOST"
      },
      "accessibility": {
        "info": "Yankee Stadium management strives to provide an accessible environment for all its Guests. Wheelchair accessible and aisle-transfer (semi-ambulatory) seats are offered at various price points and locations, pending availability, throughout the Stadium and include the Yankees Premium seat locations. The Stadium also offers enhanced accessibility for Guests with hearing loss or low vision and for Guests who are deaf or blind. \r\nPlease select the location or price point as indicated in your search that best fits your needs to view available options. You may then select and purchase seats that are available through Ticketmaster. \r\nNotwithstanding, if you would like more details or if you have any questions regarding wheelchair accessible and/or aisle-transfer seating, you may contact Disabled Services at Yankee Stadium at (718) 579-4510 (voice) or (718) 579-4595 (TTY) or email disabledservices@yankees.com.",
        "ticketLimit": 19
      },
      "ticketLimit": {
        "info": "Only a LIMITED number of Tickets (as determined by the Yankees in its sole and absolute discretion) will be made available during the presale. Maximum of nine (9) Tickets to each potential game scheduled to be played during the 2023 Regular Season."
      },
      "ageRestrictions": { "legalAgeEnforced": false },
      "ticketing": {
        "safeTix": { "enabled": true },
        "allInclusivePricing": { "enabled": false }
      },
      "_links": {
        "self": { "href": "/discovery/v2/events/G5vVZ9oE0E7-C?locale=en-us" },
        "attractions": [
          { "href": "/discovery/v2/attractions/K8vZ9171okV?locale=en-us" },
          { "href": "/discovery/v2/attractions/K8vZ9171okf?locale=en-us" }
        ],
        "venues": [
          { "href": "/discovery/v2/venues/KovZpZA6t77A?locale=en-us" }
        ]
      },
      "_embedded": {
        "venues": [
          {
            "name": "Yankee Stadium",
            "type": "venue",
            "id": "KovZpZA6t77A",
            "test": false,
            "url": "https://www.ticketmaster.com/yankee-stadium-tickets-bronx/venue/237572",
            "locale": "en-us",
            "images": [
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dbimages/16603v.jpg",
                "width": 205,
                "height": 115,
                "fallback": false
              }
            ],
            "postalCode": "10451",
            "timezone": "America/New_York",
            "city": { "name": "Bronx" },
            "state": { "name": "New York", "stateCode": "NY" },
            "country": {
              "name": "United States Of America",
              "countryCode": "US"
            },
            "address": { "line1": "1 East 161st Street" },
            "location": {
              "longitude": "-73.9276264",
              "latitude": "40.8285237"
            },
            "markets": [
              { "name": "New York/Tri-State Area", "id": "35" },
              { "name": "Northern New Jersey", "id": "55" },
              { "name": "Connecticut", "id": "124" }
            ],
            "dmas": [{ "id": 296 }, { "id": 345 }, { "id": 422 }],
            "boxOfficeInfo": {
              "openHoursDetail": "Please check yankees.com for updated information including a Yankee Stadium Ticket Office schedule."
            },
            "parkingDetail": "PREPAID PARKING The Yankees neither control nor operate the parking lots and garages surrounding the Stadium and are not responsible for setting parking lot rates, refund policies, rules and/or procedures. Quik Park was granted those rights, including responsibility for establishing and controlling parking rates, refund policies, rules and/or procedures, by New York City.",
            "upcomingEvents": {
              "ticketmaster": 692,
              "_total": 692,
              "_filtered": 0
            },
            "ada": {
              "adaPhones": "Disabled Services at Yankee Stadium: (718) 579-4510 (voice) or (718) 579-4595 (TTY) \nEmail disabledservices@yankees.com.\n",
              "adaCustomCopy": "Yankee Stadium management strives to provide an accessible environment for all its Guests. Wheelchair accessible and aisle-transfer (semi-ambulatory) seats are offered at various price points and locations, pending availability, throughout the Stadium and include the Yankees Premium seat locations. The Stadium also offers enhanced accessibility for Guests with hearing loss or low vision and for Guests who are deaf or blind. \nPlease select the location or price point as indicated in your search that best fits your needs to view available options.  You may then select and purchase seats that are available through Ticketmaster including its website.  \nNotwithstanding, if you would like more details or if you have any questions regarding wheelchair accessible and/or aisle-transfer seating, you may contact Disabled Services at Yankee Stadium at (718) 579-4510 (voice) or (718) 579-4595 (TTY) or email disabledservices@yankees.com.\n\n",
              "adaHours": "Please check yankees.com for updated information including a Yankee Stadium Ticket Office schedule.\n"
            },
            "_links": {
              "self": {
                "href": "/discovery/v2/venues/KovZpZA6t77A?locale=en-us"
              }
            }
          }
        ],
        "attractions": [
          {
            "name": "New York Yankees",
            "type": "attraction",
            "id": "K8vZ9171okV",
            "test": false,
            "url": "https://www.ticketmaster.com/new-york-yankees-tickets/artist/805992",
            "locale": "en-us",
            "externalLinks": {
              "twitter": [{ "url": "https://twitter.com/Yankees" }],
              "wiki": [
                { "url": "https://en.wikipedia.org/wiki/New_York_Yankees" }
              ],
              "facebook": [{ "url": "https://www.facebook.com/Yankees" }],
              "instagram": [{ "url": "https://www.instagram.com/yankees" }],
              "homepage": [{ "url": "https://www.mlb.com/yankees" }]
            },
            "images": [
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RETINA_LANDSCAPE_16_9.jpg",
                "width": 1136,
                "height": 639,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RECOMENDATION_16_9.jpg",
                "width": 100,
                "height": 56,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_TABLET_LANDSCAPE_16_9.jpg",
                "width": 1024,
                "height": 576,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_TABLET_LANDSCAPE_3_2.jpg",
                "width": 1024,
                "height": 683,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_EVENT_DETAIL_PAGE_16_9.jpg",
                "width": 205,
                "height": 115,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RETINA_PORTRAIT_16_9.jpg",
                "width": 640,
                "height": 360,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RETINA_PORTRAIT_3_2.jpg",
                "width": 640,
                "height": 427,
                "fallback": false
              },
              {
                "ratio": "4_3",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_CUSTOM.jpg",
                "width": 305,
                "height": 225,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_ARTIST_PAGE_3_2.jpg",
                "width": 305,
                "height": 203,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                "width": 2048,
                "height": 1152,
                "fallback": false
              }
            ],
            "classifications": [
              {
                "primary": true,
                "segment": { "id": "KZFzniwnSyZfZ7v7nE", "name": "Sports" },
                "genre": { "id": "KnvZfZ7vAdv", "name": "Baseball" },
                "subGenre": { "id": "KZazBEonSMnZfZ7vF1n", "name": "MLB" },
                "type": { "id": "KZAyXgnZfZ7v7l1", "name": "Group" },
                "subType": { "id": "KZFzBErXgnZfZ7vA7d", "name": "Team" },
                "family": false
              }
            ],
            "upcomingEvents": {
              "tmr": 29,
              "ticketmaster": 133,
              "_total": 162,
              "_filtered": 0
            },
            "_links": {
              "self": {
                "href": "/discovery/v2/attractions/K8vZ9171okV?locale=en-us"
              }
            }
          },
          {
            "name": "Boston Red Sox",
            "type": "attraction",
            "id": "K8vZ9171okf",
            "test": false,
            "url": "https://www.ticketmaster.com/boston-red-sox-tickets/artist/805904",
            "locale": "en-us",
            "externalLinks": {
              "twitter": [{ "url": "https://twitter.com/redsox" }],
              "wiki": [
                { "url": "https://en.wikipedia.org/wiki/Boston_Red_Sox" }
              ],
              "facebook": [{ "url": "https://www.facebook.com/RedSox" }],
              "instagram": [{ "url": "https://www.instagram.com/redsox" }],
              "homepage": [{ "url": "https://www.mlb.com/redsox" }]
            },
            "images": [
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/eef/8d86cdb2-b3aa-44db-9088-f8e598f45eef_1343381_TABLET_LANDSCAPE_16_9.jpg",
                "width": 1024,
                "height": 576,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/eef/8d86cdb2-b3aa-44db-9088-f8e598f45eef_1343381_RETINA_PORTRAIT_3_2.jpg",
                "width": 640,
                "height": 427,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/eef/8d86cdb2-b3aa-44db-9088-f8e598f45eef_1343381_ARTIST_PAGE_3_2.jpg",
                "width": 305,
                "height": 203,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/eef/8d86cdb2-b3aa-44db-9088-f8e598f45eef_1343381_EVENT_DETAIL_PAGE_16_9.jpg",
                "width": 205,
                "height": 115,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/eef/8d86cdb2-b3aa-44db-9088-f8e598f45eef_1343381_RETINA_PORTRAIT_16_9.jpg",
                "width": 640,
                "height": 360,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/eef/8d86cdb2-b3aa-44db-9088-f8e598f45eef_1343381_RECOMENDATION_16_9.jpg",
                "width": 100,
                "height": 56,
                "fallback": false
              },
              {
                "ratio": "4_3",
                "url": "https://s1.ticketm.net/dam/a/eef/8d86cdb2-b3aa-44db-9088-f8e598f45eef_1343381_CUSTOM.jpg",
                "width": 305,
                "height": 225,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/eef/8d86cdb2-b3aa-44db-9088-f8e598f45eef_1343381_RETINA_LANDSCAPE_16_9.jpg",
                "width": 1136,
                "height": 639,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/eef/8d86cdb2-b3aa-44db-9088-f8e598f45eef_1343381_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                "width": 2048,
                "height": 1152,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/eef/8d86cdb2-b3aa-44db-9088-f8e598f45eef_1343381_TABLET_LANDSCAPE_3_2.jpg",
                "width": 1024,
                "height": 683,
                "fallback": false
              }
            ],
            "classifications": [
              {
                "primary": true,
                "segment": { "id": "KZFzniwnSyZfZ7v7nE", "name": "Sports" },
                "genre": { "id": "KnvZfZ7vAdv", "name": "Baseball" },
                "subGenre": { "id": "KZazBEonSMnZfZ7vF1n", "name": "MLB" },
                "type": { "id": "KZAyXgnZfZ7v7l1", "name": "Group" },
                "subType": { "id": "KZFzBErXgnZfZ7vA7d", "name": "Team" },
                "family": false
              }
            ],
            "upcomingEvents": {
              "tmr": 63,
              "ticketmaster": 44,
              "_total": 107,
              "_filtered": 0
            },
            "_links": {
              "self": {
                "href": "/discovery/v2/attractions/K8vZ9171okf?locale=en-us"
              }
            }
          }
        ]
      }
    },
    {
      "name": "New York Yankees vs. Houston Astros",
      "type": "event",
      "id": "G5vVZ9oE0P0OY",
      "test": false,
      "url": "https://www.ticketmaster.com/new-york-yankees-vs-houston-astros-bronx-new-york-08-03-2023/event/1D005D19E4964830",
      "locale": "en-us",
      "images": [
        {
          "ratio": "16_9",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RETINA_LANDSCAPE_16_9.jpg",
          "width": 1136,
          "height": 639,
          "fallback": false
        },
        {
          "ratio": "16_9",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RECOMENDATION_16_9.jpg",
          "width": 100,
          "height": 56,
          "fallback": false
        },
        {
          "ratio": "16_9",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_TABLET_LANDSCAPE_16_9.jpg",
          "width": 1024,
          "height": 576,
          "fallback": false
        },
        {
          "ratio": "3_2",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_TABLET_LANDSCAPE_3_2.jpg",
          "width": 1024,
          "height": 683,
          "fallback": false
        },
        {
          "ratio": "16_9",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_EVENT_DETAIL_PAGE_16_9.jpg",
          "width": 205,
          "height": 115,
          "fallback": false
        },
        {
          "ratio": "16_9",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RETINA_PORTRAIT_16_9.jpg",
          "width": 640,
          "height": 360,
          "fallback": false
        },
        {
          "ratio": "3_2",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RETINA_PORTRAIT_3_2.jpg",
          "width": 640,
          "height": 427,
          "fallback": false
        },
        {
          "ratio": "4_3",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_CUSTOM.jpg",
          "width": 305,
          "height": 225,
          "fallback": false
        },
        {
          "ratio": "3_2",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_ARTIST_PAGE_3_2.jpg",
          "width": 305,
          "height": 203,
          "fallback": false
        },
        {
          "ratio": "16_9",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_TABLET_LANDSCAPE_LARGE_16_9.jpg",
          "width": 2048,
          "height": 1152,
          "fallback": false
        }
      ],
      "sales": {
        "public": {
          "startDateTime": "2022-09-14T14:00:00Z",
          "startTBD": false,
          "startTBA": false,
          "endDateTime": "2023-08-04T00:15:00Z"
        },
        "presales": [
          {
            "startDateTime": "2022-09-13T14:00:00Z",
            "endDateTime": "2022-09-13T16:00:00Z",
            "name": "NY Yankees Season Ticket Licensees"
          },
          {
            "startDateTime": "2022-09-13T15:00:00Z",
            "endDateTime": "2022-09-13T16:00:00Z",
            "name": "NY Yankees Past Buyers"
          },
          {
            "startDateTime": "2022-09-13T16:00:00Z",
            "endDateTime": "2022-09-14T02:00:00Z",
            "name": "Mastercard Cardholders"
          },
          {
            "startDateTime": "2022-11-18T15:00:00Z",
            "endDateTime": "2022-12-24T04:59:00Z",
            "name": "Me + 3 Promotional Offer",
            "description": "Special Offers on 4 Tickets!"
          }
        ]
      },
      "dates": {
        "start": {
          "localDate": "2023-08-03",
          "localTime": "19:15:00",
          "dateTime": "2023-08-03T23:15:00Z",
          "dateTBD": false,
          "dateTBA": false,
          "timeTBA": false,
          "noSpecificTime": false
        },
        "timezone": "America/New_York",
        "status": { "code": "onsale" },
        "spanMultipleDays": false
      },
      "classifications": [
        {
          "primary": true,
          "segment": { "id": "KZFzniwnSyZfZ7v7nE", "name": "Sports" },
          "genre": { "id": "KnvZfZ7vAdv", "name": "Baseball" },
          "subGenre": { "id": "KZazBEonSMnZfZ7vF1n", "name": "MLB" },
          "type": { "id": "KZAyXgnZfZ7v7l1", "name": "Group" },
          "subType": { "id": "KZFzBErXgnZfZ7vA7d", "name": "Team" },
          "family": false
        }
      ],
      "promoter": {
        "id": "685",
        "name": "MLB REGULAR SEASON",
        "description": "MLB REGULAR SEASON / NTL / USA"
      },
      "promoters": [
        {
          "id": "685",
          "name": "MLB REGULAR SEASON",
          "description": "MLB REGULAR SEASON / NTL / USA"
        }
      ],
      "info": "Please adhere to published limits. Persons who exceed the ticket limit may have any or all of their orders and tickets cancelled without notice by Ticketmaster in its discretion. This includes orders associated with the same name, e-mail, billing address, credit card number or other information. If you purchase tickets, you may receive customer service messages via email from the New York Yankees, including optional surveys regarding your baseball experience. Ticket holder assumes all risk of injury from balls and bats entering the stands. Please note that protective netting of varying heights is used in the Stadium from Section 011 to behind home plate to Section 029. For more information, please visit yankees.com/netting. The number of innings in a regulation game shall be determined by MLB and may be shortened in accordance with MLB rules. Licensor makes no representation, warranty and/or guarantee that nine (9) innings will be played in any regulation game.",
      "pleaseNote": "The terms and conditions of your ticket and policies applicable to use are updated to address COVID-19 and health & safety. By purchasing a Yankees ticket, you accept these Terms and Conditions and policies applicable to use. Visit yankees.com/ticketback. All ticket verification QR codes will appear 48 hrs prior to the scheduled start of the game. All individual game ticket prices are subject to variable and dynamic pricing, which provide fans with more price options based on changing factors that affect market demand.",
      "priceRanges": [
        { "type": "standard", "currency": "USD", "min": 25.0, "max": 525.0 }
      ],
      "seatmap": {
        "staticUrl": "https://maps.ticketmaster.com/maps/geometry/3/event/1D005D19E4964830/staticImage?type=png&systemId=HOST"
      },
      "accessibility": {
        "info": "Yankee Stadium management strives to provide an accessible environment for all its Guests. Wheelchair accessible and aisle-transfer (semi-ambulatory) seats are offered at various price points and locations, pending availability, throughout the Stadium and include the Yankees Premium seat locations. The Stadium also offers enhanced accessibility for Guests with hearing loss or low vision and for Guests who are deaf or blind. \r\nPlease select the location or price point as indicated in your search that best fits your needs to view available options. You may then select and purchase seats that are available through Ticketmaster. \r\nNotwithstanding, if you would like more details or if you have any questions regarding wheelchair accessible and/or aisle-transfer seating, you may contact Disabled Services at Yankee Stadium at (718) 579-4510 (voice) or (718) 579-4595 (TTY) or email disabledservices@yankees.com.",
        "ticketLimit": 19
      },
      "ticketLimit": {
        "info": "Only a LIMITED number of Tickets (as determined by the Yankees in its sole and absolute discretion) will be made available during the presale. Maximum of nine (9) Tickets to each potential game scheduled to be played during the 2023 Regular Season."
      },
      "ageRestrictions": { "legalAgeEnforced": false },
      "ticketing": {
        "safeTix": { "enabled": true },
        "allInclusivePricing": { "enabled": false }
      },
      "_links": {
        "self": { "href": "/discovery/v2/events/G5vVZ9oE0P0OY?locale=en-us" },
        "attractions": [
          { "href": "/discovery/v2/attractions/K8vZ9171okV?locale=en-us" },
          { "href": "/discovery/v2/attractions/K8vZ91718zV?locale=en-us" }
        ],
        "venues": [
          { "href": "/discovery/v2/venues/KovZpZA6t77A?locale=en-us" }
        ]
      },
      "_embedded": {
        "venues": [
          {
            "name": "Yankee Stadium",
            "type": "venue",
            "id": "KovZpZA6t77A",
            "test": false,
            "url": "https://www.ticketmaster.com/yankee-stadium-tickets-bronx/venue/237572",
            "locale": "en-us",
            "images": [
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dbimages/16603v.jpg",
                "width": 205,
                "height": 115,
                "fallback": false
              }
            ],
            "postalCode": "10451",
            "timezone": "America/New_York",
            "city": { "name": "Bronx" },
            "state": { "name": "New York", "stateCode": "NY" },
            "country": {
              "name": "United States Of America",
              "countryCode": "US"
            },
            "address": { "line1": "1 East 161st Street" },
            "location": {
              "longitude": "-73.9276264",
              "latitude": "40.8285237"
            },
            "markets": [
              { "name": "New York/Tri-State Area", "id": "35" },
              { "name": "Northern New Jersey", "id": "55" },
              { "name": "Connecticut", "id": "124" }
            ],
            "dmas": [{ "id": 296 }, { "id": 345 }, { "id": 422 }],
            "boxOfficeInfo": {
              "openHoursDetail": "Please check yankees.com for updated information including a Yankee Stadium Ticket Office schedule."
            },
            "parkingDetail": "PREPAID PARKING The Yankees neither control nor operate the parking lots and garages surrounding the Stadium and are not responsible for setting parking lot rates, refund policies, rules and/or procedures. Quik Park was granted those rights, including responsibility for establishing and controlling parking rates, refund policies, rules and/or procedures, by New York City.",
            "upcomingEvents": {
              "ticketmaster": 692,
              "_total": 692,
              "_filtered": 0
            },
            "ada": {
              "adaPhones": "Disabled Services at Yankee Stadium: (718) 579-4510 (voice) or (718) 579-4595 (TTY) \nEmail disabledservices@yankees.com.\n",
              "adaCustomCopy": "Yankee Stadium management strives to provide an accessible environment for all its Guests. Wheelchair accessible and aisle-transfer (semi-ambulatory) seats are offered at various price points and locations, pending availability, throughout the Stadium and include the Yankees Premium seat locations. The Stadium also offers enhanced accessibility for Guests with hearing loss or low vision and for Guests who are deaf or blind. \nPlease select the location or price point as indicated in your search that best fits your needs to view available options.  You may then select and purchase seats that are available through Ticketmaster including its website.  \nNotwithstanding, if you would like more details or if you have any questions regarding wheelchair accessible and/or aisle-transfer seating, you may contact Disabled Services at Yankee Stadium at (718) 579-4510 (voice) or (718) 579-4595 (TTY) or email disabledservices@yankees.com.\n\n",
              "adaHours": "Please check yankees.com for updated information including a Yankee Stadium Ticket Office schedule.\n"
            },
            "_links": {
              "self": {
                "href": "/discovery/v2/venues/KovZpZA6t77A?locale=en-us"
              }
            }
          }
        ],
        "attractions": [
          {
            "name": "New York Yankees",
            "type": "attraction",
            "id": "K8vZ9171okV",
            "test": false,
            "url": "https://www.ticketmaster.com/new-york-yankees-tickets/artist/805992",
            "locale": "en-us",
            "externalLinks": {
              "twitter": [{ "url": "https://twitter.com/Yankees" }],
              "wiki": [
                { "url": "https://en.wikipedia.org/wiki/New_York_Yankees" }
              ],
              "facebook": [{ "url": "https://www.facebook.com/Yankees" }],
              "instagram": [{ "url": "https://www.instagram.com/yankees" }],
              "homepage": [{ "url": "https://www.mlb.com/yankees" }]
            },
            "images": [
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RETINA_LANDSCAPE_16_9.jpg",
                "width": 1136,
                "height": 639,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RECOMENDATION_16_9.jpg",
                "width": 100,
                "height": 56,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_TABLET_LANDSCAPE_16_9.jpg",
                "width": 1024,
                "height": 576,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_TABLET_LANDSCAPE_3_2.jpg",
                "width": 1024,
                "height": 683,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_EVENT_DETAIL_PAGE_16_9.jpg",
                "width": 205,
                "height": 115,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RETINA_PORTRAIT_16_9.jpg",
                "width": 640,
                "height": 360,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RETINA_PORTRAIT_3_2.jpg",
                "width": 640,
                "height": 427,
                "fallback": false
              },
              {
                "ratio": "4_3",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_CUSTOM.jpg",
                "width": 305,
                "height": 225,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_ARTIST_PAGE_3_2.jpg",
                "width": 305,
                "height": 203,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                "width": 2048,
                "height": 1152,
                "fallback": false
              }
            ],
            "classifications": [
              {
                "primary": true,
                "segment": { "id": "KZFzniwnSyZfZ7v7nE", "name": "Sports" },
                "genre": { "id": "KnvZfZ7vAdv", "name": "Baseball" },
                "subGenre": { "id": "KZazBEonSMnZfZ7vF1n", "name": "MLB" },
                "type": { "id": "KZAyXgnZfZ7v7l1", "name": "Group" },
                "subType": { "id": "KZFzBErXgnZfZ7vA7d", "name": "Team" },
                "family": false
              }
            ],
            "upcomingEvents": {
              "tmr": 29,
              "ticketmaster": 133,
              "_total": 162,
              "_filtered": 0
            },
            "_links": {
              "self": {
                "href": "/discovery/v2/attractions/K8vZ9171okV?locale=en-us"
              }
            }
          },
          {
            "name": "Houston Astros",
            "type": "attraction",
            "id": "K8vZ91718zV",
            "test": false,
            "url": "https://www.ticketmaster.com/houston-astros-tickets/artist/805948",
            "locale": "en-us",
            "externalLinks": {
              "twitter": [{ "url": "https://twitter.com/astros" }],
              "wiki": [
                { "url": "https://en.wikipedia.org/wiki/Houston_Astros" }
              ],
              "facebook": [{ "url": "https://www.facebook.com/Astros" }],
              "instagram": [
                { "url": "https://www.instagram.com/astrosbaseball" }
              ],
              "homepage": [{ "url": "https://www.mlb.com/astros" }]
            },
            "aliases": ["World Series"],
            "images": [
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/645/f53abc7c-c1d5-4e8e-9513-0b407888c645_1343821_TABLET_LANDSCAPE_3_2.jpg",
                "width": 1024,
                "height": 683,
                "fallback": false
              },
              {
                "ratio": "4_3",
                "url": "https://s1.ticketm.net/dam/a/645/f53abc7c-c1d5-4e8e-9513-0b407888c645_1343821_CUSTOM.jpg",
                "width": 305,
                "height": 225,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/645/f53abc7c-c1d5-4e8e-9513-0b407888c645_1343821_TABLET_LANDSCAPE_16_9.jpg",
                "width": 1024,
                "height": 576,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/645/f53abc7c-c1d5-4e8e-9513-0b407888c645_1343821_RETINA_LANDSCAPE_16_9.jpg",
                "width": 1136,
                "height": 639,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/645/f53abc7c-c1d5-4e8e-9513-0b407888c645_1343821_RETINA_PORTRAIT_16_9.jpg",
                "width": 640,
                "height": 360,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/645/f53abc7c-c1d5-4e8e-9513-0b407888c645_1343821_RECOMENDATION_16_9.jpg",
                "width": 100,
                "height": 56,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/645/f53abc7c-c1d5-4e8e-9513-0b407888c645_1343821_EVENT_DETAIL_PAGE_16_9.jpg",
                "width": 205,
                "height": 115,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/645/f53abc7c-c1d5-4e8e-9513-0b407888c645_1343821_ARTIST_PAGE_3_2.jpg",
                "width": 305,
                "height": 203,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/645/f53abc7c-c1d5-4e8e-9513-0b407888c645_1343821_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                "width": 2048,
                "height": 1152,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/645/f53abc7c-c1d5-4e8e-9513-0b407888c645_1343821_RETINA_PORTRAIT_3_2.jpg",
                "width": 640,
                "height": 427,
                "fallback": false
              }
            ],
            "classifications": [
              {
                "primary": true,
                "segment": { "id": "KZFzniwnSyZfZ7v7nE", "name": "Sports" },
                "genre": { "id": "KnvZfZ7vAdv", "name": "Baseball" },
                "subGenre": { "id": "KZazBEonSMnZfZ7vF1n", "name": "MLB" },
                "type": { "id": "KZAyXgnZfZ7v7l1", "name": "Group" },
                "subType": { "id": "KZFzBErXgnZfZ7vA7d", "name": "Team" },
                "family": false
              }
            ],
            "upcomingEvents": {
              "tmr": 60,
              "ticketmaster": 38,
              "_total": 98,
              "_filtered": 0
            },
            "_links": {
              "self": {
                "href": "/discovery/v2/attractions/K8vZ91718zV?locale=en-us"
              }
            }
          }
        ]
      }
    },
    {
      "name": "New York Yankees vs. Boston Red Sox",
      "type": "event",
      "id": "G5vVZ9oE0Ef-8",
      "test": false,
      "url": "https://www.ticketmaster.com/new-york-yankees-vs-boston-red-bronx-new-york-08-19-2023/event/1D005D19E49D4850",
      "locale": "en-us",
      "images": [
        {
          "ratio": "16_9",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RETINA_LANDSCAPE_16_9.jpg",
          "width": 1136,
          "height": 639,
          "fallback": false
        },
        {
          "ratio": "16_9",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RECOMENDATION_16_9.jpg",
          "width": 100,
          "height": 56,
          "fallback": false
        },
        {
          "ratio": "16_9",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_TABLET_LANDSCAPE_16_9.jpg",
          "width": 1024,
          "height": 576,
          "fallback": false
        },
        {
          "ratio": "3_2",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_TABLET_LANDSCAPE_3_2.jpg",
          "width": 1024,
          "height": 683,
          "fallback": false
        },
        {
          "ratio": "16_9",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_EVENT_DETAIL_PAGE_16_9.jpg",
          "width": 205,
          "height": 115,
          "fallback": false
        },
        {
          "ratio": "16_9",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RETINA_PORTRAIT_16_9.jpg",
          "width": 640,
          "height": 360,
          "fallback": false
        },
        {
          "ratio": "3_2",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RETINA_PORTRAIT_3_2.jpg",
          "width": 640,
          "height": 427,
          "fallback": false
        },
        {
          "ratio": "4_3",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_CUSTOM.jpg",
          "width": 305,
          "height": 225,
          "fallback": false
        },
        {
          "ratio": "3_2",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_ARTIST_PAGE_3_2.jpg",
          "width": 305,
          "height": 203,
          "fallback": false
        },
        {
          "ratio": "16_9",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_TABLET_LANDSCAPE_LARGE_16_9.jpg",
          "width": 2048,
          "height": 1152,
          "fallback": false
        }
      ],
      "sales": {
        "public": {
          "startDateTime": "2022-09-14T14:00:00Z",
          "startTBD": false,
          "startTBA": false,
          "endDateTime": "2023-08-19T18:05:00Z"
        },
        "presales": [
          {
            "startDateTime": "2022-09-13T14:00:00Z",
            "endDateTime": "2022-09-13T16:00:00Z",
            "name": "NY Yankees Season Ticket Licensees"
          },
          {
            "startDateTime": "2022-09-13T15:00:00Z",
            "endDateTime": "2022-09-13T16:00:00Z",
            "name": "NY Yankees Past Buyers"
          },
          {
            "startDateTime": "2022-09-13T16:00:00Z",
            "endDateTime": "2022-09-14T02:00:00Z",
            "name": "Mastercard Cardholders"
          }
        ]
      },
      "dates": {
        "start": {
          "localDate": "2023-08-19",
          "localTime": "13:05:00",
          "dateTime": "2023-08-19T17:05:00Z",
          "dateTBD": false,
          "dateTBA": false,
          "timeTBA": false,
          "noSpecificTime": false
        },
        "timezone": "America/New_York",
        "status": { "code": "onsale" },
        "spanMultipleDays": false
      },
      "classifications": [
        {
          "primary": true,
          "segment": { "id": "KZFzniwnSyZfZ7v7nE", "name": "Sports" },
          "genre": { "id": "KnvZfZ7vAdv", "name": "Baseball" },
          "subGenre": { "id": "KZazBEonSMnZfZ7vF1n", "name": "MLB" },
          "type": { "id": "KZAyXgnZfZ7v7l1", "name": "Group" },
          "subType": { "id": "KZFzBErXgnZfZ7vA7d", "name": "Team" },
          "family": false
        }
      ],
      "promoter": {
        "id": "685",
        "name": "MLB REGULAR SEASON",
        "description": "MLB REGULAR SEASON / NTL / USA"
      },
      "promoters": [
        {
          "id": "685",
          "name": "MLB REGULAR SEASON",
          "description": "MLB REGULAR SEASON / NTL / USA"
        }
      ],
      "info": "Please adhere to published limits. Persons who exceed the ticket limit may have any or all of their orders and tickets cancelled without notice by Ticketmaster in its discretion. This includes orders associated with the same name, e-mail, billing address, credit card number or other information. If you purchase tickets, you may receive customer service messages via email from the New York Yankees, including optional surveys regarding your baseball experience. Ticket holder assumes all risk of injury from balls and bats entering the stands. Please note that protective netting of varying heights is used in the Stadium from Section 011 to behind home plate to Section 029. For more information, please visit yankees.com/netting. The number of innings in a regulation game shall be determined by MLB and may be shortened in accordance with MLB rules. Licensor makes no representation, warranty and/or guarantee that nine (9) innings will be played in any regulation game.",
      "pleaseNote": "The terms and conditions of your ticket and policies applicable to use are updated to address COVID-19 and health & safety. By purchasing a Yankees ticket, you accept these Terms and Conditions and policies applicable to use. Visit yankees.com/ticketback. All ticket verification QR codes will appear 48 hrs prior to the scheduled start of the game. All individual game ticket prices are subject to variable and dynamic pricing, which provide fans with more price options based on changing factors that affect market demand.",
      "priceRanges": [
        { "type": "standard", "currency": "USD", "min": 45.0, "max": 525.0 }
      ],
      "seatmap": {
        "staticUrl": "https://maps.ticketmaster.com/maps/geometry/3/event/1D005D19E49D4850/staticImage?type=png&systemId=HOST"
      },
      "accessibility": {
        "info": "Yankee Stadium management strives to provide an accessible environment for all its Guests. Wheelchair accessible and aisle-transfer (semi-ambulatory) seats are offered at various price points and locations, pending availability, throughout the Stadium and include the Yankees Premium seat locations. The Stadium also offers enhanced accessibility for Guests with hearing loss or low vision and for Guests who are deaf or blind. \r\nPlease select the location or price point as indicated in your search that best fits your needs to view available options. You may then select and purchase seats that are available through Ticketmaster. \r\nNotwithstanding, if you would like more details or if you have any questions regarding wheelchair accessible and/or aisle-transfer seating, you may contact Disabled Services at Yankee Stadium at (718) 579-4510 (voice) or (718) 579-4595 (TTY) or email disabledservices@yankees.com.",
        "ticketLimit": 19
      },
      "ticketLimit": {
        "info": "Only a LIMITED number of Tickets (as determined by the Yankees in its sole and absolute discretion) will be made available during the presale. Maximum of nine (9) Tickets to each potential game scheduled to be played during the 2023 Regular Season."
      },
      "ageRestrictions": { "legalAgeEnforced": false },
      "ticketing": {
        "safeTix": { "enabled": true },
        "allInclusivePricing": { "enabled": false }
      },
      "_links": {
        "self": { "href": "/discovery/v2/events/G5vVZ9oE0Ef-8?locale=en-us" },
        "attractions": [
          { "href": "/discovery/v2/attractions/K8vZ9171okV?locale=en-us" },
          { "href": "/discovery/v2/attractions/K8vZ9171okf?locale=en-us" }
        ],
        "venues": [
          { "href": "/discovery/v2/venues/KovZpZA6t77A?locale=en-us" }
        ]
      },
      "_embedded": {
        "venues": [
          {
            "name": "Yankee Stadium",
            "type": "venue",
            "id": "KovZpZA6t77A",
            "test": false,
            "url": "https://www.ticketmaster.com/yankee-stadium-tickets-bronx/venue/237572",
            "locale": "en-us",
            "images": [
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dbimages/16603v.jpg",
                "width": 205,
                "height": 115,
                "fallback": false
              }
            ],
            "postalCode": "10451",
            "timezone": "America/New_York",
            "city": { "name": "Bronx" },
            "state": { "name": "New York", "stateCode": "NY" },
            "country": {
              "name": "United States Of America",
              "countryCode": "US"
            },
            "address": { "line1": "1 East 161st Street" },
            "location": {
              "longitude": "-73.9276264",
              "latitude": "40.8285237"
            },
            "markets": [
              { "name": "New York/Tri-State Area", "id": "35" },
              { "name": "Northern New Jersey", "id": "55" },
              { "name": "Connecticut", "id": "124" }
            ],
            "dmas": [{ "id": 296 }, { "id": 345 }, { "id": 422 }],
            "boxOfficeInfo": {
              "openHoursDetail": "Please check yankees.com for updated information including a Yankee Stadium Ticket Office schedule."
            },
            "parkingDetail": "PREPAID PARKING The Yankees neither control nor operate the parking lots and garages surrounding the Stadium and are not responsible for setting parking lot rates, refund policies, rules and/or procedures. Quik Park was granted those rights, including responsibility for establishing and controlling parking rates, refund policies, rules and/or procedures, by New York City.",
            "upcomingEvents": {
              "ticketmaster": 692,
              "_total": 692,
              "_filtered": 0
            },
            "ada": {
              "adaPhones": "Disabled Services at Yankee Stadium: (718) 579-4510 (voice) or (718) 579-4595 (TTY) \nEmail disabledservices@yankees.com.\n",
              "adaCustomCopy": "Yankee Stadium management strives to provide an accessible environment for all its Guests. Wheelchair accessible and aisle-transfer (semi-ambulatory) seats are offered at various price points and locations, pending availability, throughout the Stadium and include the Yankees Premium seat locations. The Stadium also offers enhanced accessibility for Guests with hearing loss or low vision and for Guests who are deaf or blind. \nPlease select the location or price point as indicated in your search that best fits your needs to view available options.  You may then select and purchase seats that are available through Ticketmaster including its website.  \nNotwithstanding, if you would like more details or if you have any questions regarding wheelchair accessible and/or aisle-transfer seating, you may contact Disabled Services at Yankee Stadium at (718) 579-4510 (voice) or (718) 579-4595 (TTY) or email disabledservices@yankees.com.\n\n",
              "adaHours": "Please check yankees.com for updated information including a Yankee Stadium Ticket Office schedule.\n"
            },
            "_links": {
              "self": {
                "href": "/discovery/v2/venues/KovZpZA6t77A?locale=en-us"
              }
            }
          }
        ],
        "attractions": [
          {
            "name": "New York Yankees",
            "type": "attraction",
            "id": "K8vZ9171okV",
            "test": false,
            "url": "https://www.ticketmaster.com/new-york-yankees-tickets/artist/805992",
            "locale": "en-us",
            "externalLinks": {
              "twitter": [{ "url": "https://twitter.com/Yankees" }],
              "wiki": [
                { "url": "https://en.wikipedia.org/wiki/New_York_Yankees" }
              ],
              "facebook": [{ "url": "https://www.facebook.com/Yankees" }],
              "instagram": [{ "url": "https://www.instagram.com/yankees" }],
              "homepage": [{ "url": "https://www.mlb.com/yankees" }]
            },
            "images": [
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RETINA_LANDSCAPE_16_9.jpg",
                "width": 1136,
                "height": 639,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RECOMENDATION_16_9.jpg",
                "width": 100,
                "height": 56,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_TABLET_LANDSCAPE_16_9.jpg",
                "width": 1024,
                "height": 576,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_TABLET_LANDSCAPE_3_2.jpg",
                "width": 1024,
                "height": 683,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_EVENT_DETAIL_PAGE_16_9.jpg",
                "width": 205,
                "height": 115,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RETINA_PORTRAIT_16_9.jpg",
                "width": 640,
                "height": 360,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RETINA_PORTRAIT_3_2.jpg",
                "width": 640,
                "height": 427,
                "fallback": false
              },
              {
                "ratio": "4_3",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_CUSTOM.jpg",
                "width": 305,
                "height": 225,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_ARTIST_PAGE_3_2.jpg",
                "width": 305,
                "height": 203,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                "width": 2048,
                "height": 1152,
                "fallback": false
              }
            ],
            "classifications": [
              {
                "primary": true,
                "segment": { "id": "KZFzniwnSyZfZ7v7nE", "name": "Sports" },
                "genre": { "id": "KnvZfZ7vAdv", "name": "Baseball" },
                "subGenre": { "id": "KZazBEonSMnZfZ7vF1n", "name": "MLB" },
                "type": { "id": "KZAyXgnZfZ7v7l1", "name": "Group" },
                "subType": { "id": "KZFzBErXgnZfZ7vA7d", "name": "Team" },
                "family": false
              }
            ],
            "upcomingEvents": {
              "tmr": 29,
              "ticketmaster": 133,
              "_total": 162,
              "_filtered": 0
            },
            "_links": {
              "self": {
                "href": "/discovery/v2/attractions/K8vZ9171okV?locale=en-us"
              }
            }
          },
          {
            "name": "Boston Red Sox",
            "type": "attraction",
            "id": "K8vZ9171okf",
            "test": false,
            "url": "https://www.ticketmaster.com/boston-red-sox-tickets/artist/805904",
            "locale": "en-us",
            "externalLinks": {
              "twitter": [{ "url": "https://twitter.com/redsox" }],
              "wiki": [
                { "url": "https://en.wikipedia.org/wiki/Boston_Red_Sox" }
              ],
              "facebook": [{ "url": "https://www.facebook.com/RedSox" }],
              "instagram": [{ "url": "https://www.instagram.com/redsox" }],
              "homepage": [{ "url": "https://www.mlb.com/redsox" }]
            },
            "images": [
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/eef/8d86cdb2-b3aa-44db-9088-f8e598f45eef_1343381_TABLET_LANDSCAPE_16_9.jpg",
                "width": 1024,
                "height": 576,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/eef/8d86cdb2-b3aa-44db-9088-f8e598f45eef_1343381_RETINA_PORTRAIT_3_2.jpg",
                "width": 640,
                "height": 427,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/eef/8d86cdb2-b3aa-44db-9088-f8e598f45eef_1343381_ARTIST_PAGE_3_2.jpg",
                "width": 305,
                "height": 203,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/eef/8d86cdb2-b3aa-44db-9088-f8e598f45eef_1343381_EVENT_DETAIL_PAGE_16_9.jpg",
                "width": 205,
                "height": 115,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/eef/8d86cdb2-b3aa-44db-9088-f8e598f45eef_1343381_RETINA_PORTRAIT_16_9.jpg",
                "width": 640,
                "height": 360,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/eef/8d86cdb2-b3aa-44db-9088-f8e598f45eef_1343381_RECOMENDATION_16_9.jpg",
                "width": 100,
                "height": 56,
                "fallback": false
              },
              {
                "ratio": "4_3",
                "url": "https://s1.ticketm.net/dam/a/eef/8d86cdb2-b3aa-44db-9088-f8e598f45eef_1343381_CUSTOM.jpg",
                "width": 305,
                "height": 225,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/eef/8d86cdb2-b3aa-44db-9088-f8e598f45eef_1343381_RETINA_LANDSCAPE_16_9.jpg",
                "width": 1136,
                "height": 639,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/eef/8d86cdb2-b3aa-44db-9088-f8e598f45eef_1343381_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                "width": 2048,
                "height": 1152,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/eef/8d86cdb2-b3aa-44db-9088-f8e598f45eef_1343381_TABLET_LANDSCAPE_3_2.jpg",
                "width": 1024,
                "height": 683,
                "fallback": false
              }
            ],
            "classifications": [
              {
                "primary": true,
                "segment": { "id": "KZFzniwnSyZfZ7v7nE", "name": "Sports" },
                "genre": { "id": "KnvZfZ7vAdv", "name": "Baseball" },
                "subGenre": { "id": "KZazBEonSMnZfZ7vF1n", "name": "MLB" },
                "type": { "id": "KZAyXgnZfZ7v7l1", "name": "Group" },
                "subType": { "id": "KZFzBErXgnZfZ7vA7d", "name": "Team" },
                "family": false
              }
            ],
            "upcomingEvents": {
              "tmr": 63,
              "ticketmaster": 44,
              "_total": 107,
              "_filtered": 0
            },
            "_links": {
              "self": {
                "href": "/discovery/v2/attractions/K8vZ9171okf?locale=en-us"
              }
            }
          }
        ]
      }
    },
    {
      "name": "New York Yankees vs. Washington Nationals",
      "type": "event",
      "id": "G5vVZ9oE0I0-i",
      "test": false,
      "url": "https://www.ticketmaster.com/new-york-yankees-vs-washington-nationals-bronx-new-york-08-24-2023/event/1D005D19E4A2486C",
      "locale": "en-us",
      "images": [
        {
          "ratio": "16_9",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RETINA_LANDSCAPE_16_9.jpg",
          "width": 1136,
          "height": 639,
          "fallback": false
        },
        {
          "ratio": "16_9",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RECOMENDATION_16_9.jpg",
          "width": 100,
          "height": 56,
          "fallback": false
        },
        {
          "ratio": "16_9",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_TABLET_LANDSCAPE_16_9.jpg",
          "width": 1024,
          "height": 576,
          "fallback": false
        },
        {
          "ratio": "3_2",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_TABLET_LANDSCAPE_3_2.jpg",
          "width": 1024,
          "height": 683,
          "fallback": false
        },
        {
          "ratio": "16_9",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_EVENT_DETAIL_PAGE_16_9.jpg",
          "width": 205,
          "height": 115,
          "fallback": false
        },
        {
          "ratio": "16_9",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RETINA_PORTRAIT_16_9.jpg",
          "width": 640,
          "height": 360,
          "fallback": false
        },
        {
          "ratio": "3_2",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RETINA_PORTRAIT_3_2.jpg",
          "width": 640,
          "height": 427,
          "fallback": false
        },
        {
          "ratio": "4_3",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_CUSTOM.jpg",
          "width": 305,
          "height": 225,
          "fallback": false
        },
        {
          "ratio": "3_2",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_ARTIST_PAGE_3_2.jpg",
          "width": 305,
          "height": 203,
          "fallback": false
        },
        {
          "ratio": "16_9",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_TABLET_LANDSCAPE_LARGE_16_9.jpg",
          "width": 2048,
          "height": 1152,
          "fallback": false
        }
      ],
      "sales": {
        "public": {
          "startDateTime": "2022-09-14T14:00:00Z",
          "startTBD": false,
          "startTBA": false,
          "endDateTime": "2023-08-24T18:05:00Z"
        },
        "presales": [
          {
            "startDateTime": "2022-09-13T14:00:00Z",
            "endDateTime": "2022-09-13T16:00:00Z",
            "name": "NY Yankees Season Ticket Licensees"
          },
          {
            "startDateTime": "2022-09-13T15:00:00Z",
            "endDateTime": "2022-09-13T16:00:00Z",
            "name": "NY Yankees Past Buyers"
          },
          {
            "startDateTime": "2022-09-13T16:00:00Z",
            "endDateTime": "2022-09-14T02:00:00Z",
            "name": "Mastercard Cardholders"
          },
          {
            "startDateTime": "2022-11-18T15:00:00Z",
            "endDateTime": "2022-12-24T04:59:00Z",
            "name": "Me + 3 Promotional Offer",
            "description": "Special Offers on 4 Tickets!"
          }
        ]
      },
      "dates": {
        "start": {
          "localDate": "2023-08-24",
          "localTime": "13:05:00",
          "dateTime": "2023-08-24T17:05:00Z",
          "dateTBD": false,
          "dateTBA": false,
          "timeTBA": false,
          "noSpecificTime": false
        },
        "timezone": "America/New_York",
        "status": { "code": "onsale" },
        "spanMultipleDays": false
      },
      "classifications": [
        {
          "primary": true,
          "segment": { "id": "KZFzniwnSyZfZ7v7nE", "name": "Sports" },
          "genre": { "id": "KnvZfZ7vAdv", "name": "Baseball" },
          "subGenre": { "id": "KZazBEonSMnZfZ7vF1n", "name": "MLB" },
          "type": { "id": "KZAyXgnZfZ7v7l1", "name": "Group" },
          "subType": { "id": "KZFzBErXgnZfZ7vA7d", "name": "Team" },
          "family": false
        }
      ],
      "promoter": {
        "id": "685",
        "name": "MLB REGULAR SEASON",
        "description": "MLB REGULAR SEASON / NTL / USA"
      },
      "promoters": [
        {
          "id": "685",
          "name": "MLB REGULAR SEASON",
          "description": "MLB REGULAR SEASON / NTL / USA"
        }
      ],
      "info": "Please adhere to published limits. Persons who exceed the ticket limit may have any or all of their orders and tickets cancelled without notice by Ticketmaster in its discretion. This includes orders associated with the same name, e-mail, billing address, credit card number or other information. If you purchase tickets, you may receive customer service messages via email from the New York Yankees, including optional surveys regarding your baseball experience. Ticket holder assumes all risk of injury from balls and bats entering the stands. Please note that protective netting of varying heights is used in the Stadium from Section 011 to behind home plate to Section 029. For more information, please visit yankees.com/netting. The number of innings in a regulation game shall be determined by MLB and may be shortened in accordance with MLB rules. Licensor makes no representation, warranty and/or guarantee that nine (9) innings will be played in any regulation game.",
      "pleaseNote": "The terms and conditions of your ticket and policies applicable to use are updated to address COVID-19 and health & safety. By purchasing a Yankees ticket, you accept these Terms and Conditions and policies applicable to use. Visit yankees.com/ticketback. All ticket verification QR codes will appear 48 hrs prior to the scheduled start of the game. All individual game ticket prices are subject to variable and dynamic pricing, which provide fans with more price options based on changing factors that affect market demand.",
      "priceRanges": [
        { "type": "standard", "currency": "USD", "min": 15.0, "max": 510.0 }
      ],
      "seatmap": {
        "staticUrl": "https://maps.ticketmaster.com/maps/geometry/3/event/1D005D19E4A2486C/staticImage?type=png&systemId=HOST"
      },
      "accessibility": {
        "info": "Yankee Stadium management strives to provide an accessible environment for all its Guests. Wheelchair accessible and aisle-transfer (semi-ambulatory) seats are offered at various price points and locations, pending availability, throughout the Stadium and include the Yankees Premium seat locations. The Stadium also offers enhanced accessibility for Guests with hearing loss or low vision and for Guests who are deaf or blind. \r\nPlease select the location or price point as indicated in your search that best fits your needs to view available options. You may then select and purchase seats that are available through Ticketmaster. \r\nNotwithstanding, if you would like more details or if you have any questions regarding wheelchair accessible and/or aisle-transfer seating, you may contact Disabled Services at Yankee Stadium at (718) 579-4510 (voice) or (718) 579-4595 (TTY) or email disabledservices@yankees.com.",
        "ticketLimit": 19
      },
      "ticketLimit": {
        "info": "Only a LIMITED number of Tickets (as determined by the Yankees in its sole and absolute discretion) will be made available during the presale. Maximum of nine (9) Tickets to each potential game scheduled to be played during the 2023 Regular Season."
      },
      "ageRestrictions": { "legalAgeEnforced": false },
      "ticketing": {
        "safeTix": { "enabled": true },
        "allInclusivePricing": { "enabled": false }
      },
      "_links": {
        "self": { "href": "/discovery/v2/events/G5vVZ9oE0I0-i?locale=en-us" },
        "attractions": [
          { "href": "/discovery/v2/attractions/K8vZ9171okV?locale=en-us" },
          { "href": "/discovery/v2/attractions/K8vZ9175lJ0?locale=en-us" }
        ],
        "venues": [
          { "href": "/discovery/v2/venues/KovZpZA6t77A?locale=en-us" }
        ]
      },
      "_embedded": {
        "venues": [
          {
            "name": "Yankee Stadium",
            "type": "venue",
            "id": "KovZpZA6t77A",
            "test": false,
            "url": "https://www.ticketmaster.com/yankee-stadium-tickets-bronx/venue/237572",
            "locale": "en-us",
            "images": [
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dbimages/16603v.jpg",
                "width": 205,
                "height": 115,
                "fallback": false
              }
            ],
            "postalCode": "10451",
            "timezone": "America/New_York",
            "city": { "name": "Bronx" },
            "state": { "name": "New York", "stateCode": "NY" },
            "country": {
              "name": "United States Of America",
              "countryCode": "US"
            },
            "address": { "line1": "1 East 161st Street" },
            "location": {
              "longitude": "-73.9276264",
              "latitude": "40.8285237"
            },
            "markets": [
              { "name": "New York/Tri-State Area", "id": "35" },
              { "name": "Northern New Jersey", "id": "55" },
              { "name": "Connecticut", "id": "124" }
            ],
            "dmas": [{ "id": 296 }, { "id": 345 }, { "id": 422 }],
            "boxOfficeInfo": {
              "openHoursDetail": "Please check yankees.com for updated information including a Yankee Stadium Ticket Office schedule."
            },
            "parkingDetail": "PREPAID PARKING The Yankees neither control nor operate the parking lots and garages surrounding the Stadium and are not responsible for setting parking lot rates, refund policies, rules and/or procedures. Quik Park was granted those rights, including responsibility for establishing and controlling parking rates, refund policies, rules and/or procedures, by New York City.",
            "upcomingEvents": {
              "ticketmaster": 692,
              "_total": 692,
              "_filtered": 0
            },
            "ada": {
              "adaPhones": "Disabled Services at Yankee Stadium: (718) 579-4510 (voice) or (718) 579-4595 (TTY) \nEmail disabledservices@yankees.com.\n",
              "adaCustomCopy": "Yankee Stadium management strives to provide an accessible environment for all its Guests. Wheelchair accessible and aisle-transfer (semi-ambulatory) seats are offered at various price points and locations, pending availability, throughout the Stadium and include the Yankees Premium seat locations. The Stadium also offers enhanced accessibility for Guests with hearing loss or low vision and for Guests who are deaf or blind. \nPlease select the location or price point as indicated in your search that best fits your needs to view available options.  You may then select and purchase seats that are available through Ticketmaster including its website.  \nNotwithstanding, if you would like more details or if you have any questions regarding wheelchair accessible and/or aisle-transfer seating, you may contact Disabled Services at Yankee Stadium at (718) 579-4510 (voice) or (718) 579-4595 (TTY) or email disabledservices@yankees.com.\n\n",
              "adaHours": "Please check yankees.com for updated information including a Yankee Stadium Ticket Office schedule.\n"
            },
            "_links": {
              "self": {
                "href": "/discovery/v2/venues/KovZpZA6t77A?locale=en-us"
              }
            }
          }
        ],
        "attractions": [
          {
            "name": "New York Yankees",
            "type": "attraction",
            "id": "K8vZ9171okV",
            "test": false,
            "url": "https://www.ticketmaster.com/new-york-yankees-tickets/artist/805992",
            "locale": "en-us",
            "externalLinks": {
              "twitter": [{ "url": "https://twitter.com/Yankees" }],
              "wiki": [
                { "url": "https://en.wikipedia.org/wiki/New_York_Yankees" }
              ],
              "facebook": [{ "url": "https://www.facebook.com/Yankees" }],
              "instagram": [{ "url": "https://www.instagram.com/yankees" }],
              "homepage": [{ "url": "https://www.mlb.com/yankees" }]
            },
            "images": [
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RETINA_LANDSCAPE_16_9.jpg",
                "width": 1136,
                "height": 639,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RECOMENDATION_16_9.jpg",
                "width": 100,
                "height": 56,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_TABLET_LANDSCAPE_16_9.jpg",
                "width": 1024,
                "height": 576,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_TABLET_LANDSCAPE_3_2.jpg",
                "width": 1024,
                "height": 683,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_EVENT_DETAIL_PAGE_16_9.jpg",
                "width": 205,
                "height": 115,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RETINA_PORTRAIT_16_9.jpg",
                "width": 640,
                "height": 360,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RETINA_PORTRAIT_3_2.jpg",
                "width": 640,
                "height": 427,
                "fallback": false
              },
              {
                "ratio": "4_3",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_CUSTOM.jpg",
                "width": 305,
                "height": 225,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_ARTIST_PAGE_3_2.jpg",
                "width": 305,
                "height": 203,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                "width": 2048,
                "height": 1152,
                "fallback": false
              }
            ],
            "classifications": [
              {
                "primary": true,
                "segment": { "id": "KZFzniwnSyZfZ7v7nE", "name": "Sports" },
                "genre": { "id": "KnvZfZ7vAdv", "name": "Baseball" },
                "subGenre": { "id": "KZazBEonSMnZfZ7vF1n", "name": "MLB" },
                "type": { "id": "KZAyXgnZfZ7v7l1", "name": "Group" },
                "subType": { "id": "KZFzBErXgnZfZ7vA7d", "name": "Team" },
                "family": false
              }
            ],
            "upcomingEvents": {
              "tmr": 29,
              "ticketmaster": 133,
              "_total": 162,
              "_filtered": 0
            },
            "_links": {
              "self": {
                "href": "/discovery/v2/attractions/K8vZ9171okV?locale=en-us"
              }
            }
          },
          {
            "name": "Washington Nationals",
            "type": "attraction",
            "id": "K8vZ9175lJ0",
            "test": false,
            "url": "https://www.ticketmaster.com/washington-nationals-tickets/artist/948674",
            "locale": "en-us",
            "externalLinks": {
              "twitter": [{ "url": "https://twitter.com/Nationals" }],
              "wiki": [
                {
                  "url": "https://en.wikipedia.org/wiki/Washington_Nationals"
                }
              ],
              "facebook": [{ "url": "https://www.facebook.com/Nationals" }],
              "instagram": [{ "url": "https://www.instagram.com/nationals" }],
              "homepage": [{ "url": "https://www.mlb.com/nationals" }]
            },
            "images": [
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/823/a39126ac-0273-4ce6-b496-0db9b69ce823_1343551_ARTIST_PAGE_3_2.jpg",
                "width": 305,
                "height": 203,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/823/a39126ac-0273-4ce6-b496-0db9b69ce823_1343551_RETINA_PORTRAIT_3_2.jpg",
                "width": 640,
                "height": 427,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/823/a39126ac-0273-4ce6-b496-0db9b69ce823_1343551_RECOMENDATION_16_9.jpg",
                "width": 100,
                "height": 56,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/823/a39126ac-0273-4ce6-b496-0db9b69ce823_1343551_EVENT_DETAIL_PAGE_16_9.jpg",
                "width": 205,
                "height": 115,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/823/a39126ac-0273-4ce6-b496-0db9b69ce823_1343551_RETINA_PORTRAIT_16_9.jpg",
                "width": 640,
                "height": 360,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/823/a39126ac-0273-4ce6-b496-0db9b69ce823_1343551_RETINA_LANDSCAPE_16_9.jpg",
                "width": 1136,
                "height": 639,
                "fallback": false
              },
              {
                "ratio": "4_3",
                "url": "https://s1.ticketm.net/dam/a/823/a39126ac-0273-4ce6-b496-0db9b69ce823_1343551_CUSTOM.jpg",
                "width": 305,
                "height": 225,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/823/a39126ac-0273-4ce6-b496-0db9b69ce823_1343551_TABLET_LANDSCAPE_16_9.jpg",
                "width": 1024,
                "height": 576,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/823/a39126ac-0273-4ce6-b496-0db9b69ce823_1343551_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                "width": 2048,
                "height": 1152,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/823/a39126ac-0273-4ce6-b496-0db9b69ce823_1343551_TABLET_LANDSCAPE_3_2.jpg",
                "width": 1024,
                "height": 683,
                "fallback": false
              }
            ],
            "classifications": [
              {
                "primary": true,
                "segment": { "id": "KZFzniwnSyZfZ7v7nE", "name": "Sports" },
                "genre": { "id": "KnvZfZ7vAdv", "name": "Baseball" },
                "subGenre": { "id": "KZazBEonSMnZfZ7vF1n", "name": "MLB" },
                "type": { "id": "KZAyXgnZfZ7v7l1", "name": "Group" },
                "subType": { "id": "KZFzBErXgnZfZ7vA7d", "name": "Team" },
                "family": false
              }
            ],
            "upcomingEvents": {
              "tmr": 63,
              "ticketmaster": 23,
              "_total": 86,
              "_filtered": 0
            },
            "_links": {
              "self": {
                "href": "/discovery/v2/attractions/K8vZ9175lJ0?locale=en-us"
              }
            }
          }
        ]
      }
    },
    {
      "name": "New York Yankees vs. Milwaukee Brewers",
      "type": "event",
      "id": "G5vVZ9oE0nVxG",
      "test": false,
      "url": "https://www.ticketmaster.com/new-york-yankees-vs-milwaukee-brewers-bronx-new-york-09-09-2023/event/1D005D19E4AB488C",
      "locale": "en-us",
      "images": [
        {
          "ratio": "16_9",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RETINA_LANDSCAPE_16_9.jpg",
          "width": 1136,
          "height": 639,
          "fallback": false
        },
        {
          "ratio": "16_9",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RECOMENDATION_16_9.jpg",
          "width": 100,
          "height": 56,
          "fallback": false
        },
        {
          "ratio": "16_9",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_TABLET_LANDSCAPE_16_9.jpg",
          "width": 1024,
          "height": 576,
          "fallback": false
        },
        {
          "ratio": "3_2",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_TABLET_LANDSCAPE_3_2.jpg",
          "width": 1024,
          "height": 683,
          "fallback": false
        },
        {
          "ratio": "16_9",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_EVENT_DETAIL_PAGE_16_9.jpg",
          "width": 205,
          "height": 115,
          "fallback": false
        },
        {
          "ratio": "16_9",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RETINA_PORTRAIT_16_9.jpg",
          "width": 640,
          "height": 360,
          "fallback": false
        },
        {
          "ratio": "3_2",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RETINA_PORTRAIT_3_2.jpg",
          "width": 640,
          "height": 427,
          "fallback": false
        },
        {
          "ratio": "4_3",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_CUSTOM.jpg",
          "width": 305,
          "height": 225,
          "fallback": false
        },
        {
          "ratio": "3_2",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_ARTIST_PAGE_3_2.jpg",
          "width": 305,
          "height": 203,
          "fallback": false
        },
        {
          "ratio": "16_9",
          "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_TABLET_LANDSCAPE_LARGE_16_9.jpg",
          "width": 2048,
          "height": 1152,
          "fallback": false
        }
      ],
      "sales": {
        "public": {
          "startDateTime": "2022-09-14T14:00:00Z",
          "startTBD": false,
          "startTBA": false,
          "endDateTime": "2023-09-09T19:05:00Z"
        },
        "presales": [
          {
            "startDateTime": "2022-09-13T14:00:00Z",
            "endDateTime": "2022-09-13T16:00:00Z",
            "name": "NY Yankees Season Ticket Licensees"
          },
          {
            "startDateTime": "2022-09-13T15:00:00Z",
            "endDateTime": "2022-09-13T16:00:00Z",
            "name": "NY Yankees Past Buyers"
          },
          {
            "startDateTime": "2022-09-13T16:00:00Z",
            "endDateTime": "2022-09-14T02:00:00Z",
            "name": "Mastercard Cardholders"
          }
        ]
      },
      "dates": {
        "start": {
          "localDate": "2023-09-09",
          "localTime": "14:05:00",
          "dateTime": "2023-09-09T18:05:00Z",
          "dateTBD": false,
          "dateTBA": false,
          "timeTBA": false,
          "noSpecificTime": false
        },
        "timezone": "America/New_York",
        "status": { "code": "onsale" },
        "spanMultipleDays": false
      },
      "classifications": [
        {
          "primary": true,
          "segment": { "id": "KZFzniwnSyZfZ7v7nE", "name": "Sports" },
          "genre": { "id": "KnvZfZ7vAdv", "name": "Baseball" },
          "subGenre": { "id": "KZazBEonSMnZfZ7vF1n", "name": "MLB" },
          "type": { "id": "KZAyXgnZfZ7v7l1", "name": "Group" },
          "subType": { "id": "KZFzBErXgnZfZ7vA7d", "name": "Team" },
          "family": false
        }
      ],
      "promoter": {
        "id": "685",
        "name": "MLB REGULAR SEASON",
        "description": "MLB REGULAR SEASON / NTL / USA"
      },
      "promoters": [
        {
          "id": "685",
          "name": "MLB REGULAR SEASON",
          "description": "MLB REGULAR SEASON / NTL / USA"
        }
      ],
      "info": "Please adhere to published limits. Persons who exceed the ticket limit may have any or all of their orders and tickets cancelled without notice by Ticketmaster in its discretion. This includes orders associated with the same name, e-mail, billing address, credit card number or other information. If you purchase tickets, you may receive customer service messages via email from the New York Yankees, including optional surveys regarding your baseball experience. Ticket holder assumes all risk of injury from balls and bats entering the stands. Please note that protective netting of varying heights is used in the Stadium from Section 011 to behind home plate to Section 029. For more information, please visit yankees.com/netting. The number of innings in a regulation game shall be determined by MLB and may be shortened in accordance with MLB rules. Licensor makes no representation, warranty and/or guarantee that nine (9) innings will be played in any regulation game.",
      "pleaseNote": "The terms and conditions of your ticket and policies applicable to use are updated to address COVID-19 and health & safety. By purchasing a Yankees ticket, you accept these Terms and Conditions and policies applicable to use. Visit yankees.com/ticketback. All ticket verification QR codes will appear 48 hrs prior to the scheduled start of the game. All individual game ticket prices are subject to variable and dynamic pricing, which provide fans with more price options based on changing factors that affect market demand.",
      "priceRanges": [
        { "type": "standard", "currency": "USD", "min": 20.0, "max": 510.0 }
      ],
      "seatmap": {
        "staticUrl": "https://maps.ticketmaster.com/maps/geometry/3/event/1D005D19E4AB488C/staticImage?type=png&systemId=HOST"
      },
      "accessibility": {
        "info": "Yankee Stadium management strives to provide an accessible environment for all its Guests. Wheelchair accessible and aisle-transfer (semi-ambulatory) seats are offered at various price points and locations, pending availability, throughout the Stadium and include the Yankees Premium seat locations. The Stadium also offers enhanced accessibility for Guests with hearing loss or low vision and for Guests who are deaf or blind. \r\nPlease select the location or price point as indicated in your search that best fits your needs to view available options. You may then select and purchase seats that are available through Ticketmaster. \r\nNotwithstanding, if you would like more details or if you have any questions regarding wheelchair accessible and/or aisle-transfer seating, you may contact Disabled Services at Yankee Stadium at (718) 579-4510 (voice) or (718) 579-4595 (TTY) or email disabledservices@yankees.com.",
        "ticketLimit": 19
      },
      "ticketLimit": {
        "info": "Only a LIMITED number of Tickets (as determined by the Yankees in its sole and absolute discretion) will be made available during the presale. Maximum of nine (9) Tickets to each potential game scheduled to be played during the 2023 Regular Season."
      },
      "ageRestrictions": { "legalAgeEnforced": false },
      "ticketing": {
        "safeTix": { "enabled": true },
        "allInclusivePricing": { "enabled": false }
      },
      "_links": {
        "self": { "href": "/discovery/v2/events/G5vVZ9oE0nVxG?locale=en-us" },
        "attractions": [
          { "href": "/discovery/v2/attractions/K8vZ9171okV?locale=en-us" },
          { "href": "/discovery/v2/attractions/K8vZ91718H7?locale=en-us" }
        ],
        "venues": [
          { "href": "/discovery/v2/venues/KovZpZA6t77A?locale=en-us" }
        ]
      },
      "_embedded": {
        "venues": [
          {
            "name": "Yankee Stadium",
            "type": "venue",
            "id": "KovZpZA6t77A",
            "test": false,
            "url": "https://www.ticketmaster.com/yankee-stadium-tickets-bronx/venue/237572",
            "locale": "en-us",
            "images": [
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dbimages/16603v.jpg",
                "width": 205,
                "height": 115,
                "fallback": false
              }
            ],
            "postalCode": "10451",
            "timezone": "America/New_York",
            "city": { "name": "Bronx" },
            "state": { "name": "New York", "stateCode": "NY" },
            "country": {
              "name": "United States Of America",
              "countryCode": "US"
            },
            "address": { "line1": "1 East 161st Street" },
            "location": {
              "longitude": "-73.9276264",
              "latitude": "40.8285237"
            },
            "markets": [
              { "name": "New York/Tri-State Area", "id": "35" },
              { "name": "Northern New Jersey", "id": "55" },
              { "name": "Connecticut", "id": "124" }
            ],
            "dmas": [{ "id": 296 }, { "id": 345 }, { "id": 422 }],
            "boxOfficeInfo": {
              "openHoursDetail": "Please check yankees.com for updated information including a Yankee Stadium Ticket Office schedule."
            },
            "parkingDetail": "PREPAID PARKING The Yankees neither control nor operate the parking lots and garages surrounding the Stadium and are not responsible for setting parking lot rates, refund policies, rules and/or procedures. Quik Park was granted those rights, including responsibility for establishing and controlling parking rates, refund policies, rules and/or procedures, by New York City.",
            "upcomingEvents": {
              "ticketmaster": 692,
              "_total": 692,
              "_filtered": 0
            },
            "ada": {
              "adaPhones": "Disabled Services at Yankee Stadium: (718) 579-4510 (voice) or (718) 579-4595 (TTY) \nEmail disabledservices@yankees.com.\n",
              "adaCustomCopy": "Yankee Stadium management strives to provide an accessible environment for all its Guests. Wheelchair accessible and aisle-transfer (semi-ambulatory) seats are offered at various price points and locations, pending availability, throughout the Stadium and include the Yankees Premium seat locations. The Stadium also offers enhanced accessibility for Guests with hearing loss or low vision and for Guests who are deaf or blind. \nPlease select the location or price point as indicated in your search that best fits your needs to view available options.  You may then select and purchase seats that are available through Ticketmaster including its website.  \nNotwithstanding, if you would like more details or if you have any questions regarding wheelchair accessible and/or aisle-transfer seating, you may contact Disabled Services at Yankee Stadium at (718) 579-4510 (voice) or (718) 579-4595 (TTY) or email disabledservices@yankees.com.\n\n",
              "adaHours": "Please check yankees.com for updated information including a Yankee Stadium Ticket Office schedule.\n"
            },
            "_links": {
              "self": {
                "href": "/discovery/v2/venues/KovZpZA6t77A?locale=en-us"
              }
            }
          }
        ],
        "attractions": [
          {
            "name": "New York Yankees",
            "type": "attraction",
            "id": "K8vZ9171okV",
            "test": false,
            "url": "https://www.ticketmaster.com/new-york-yankees-tickets/artist/805992",
            "locale": "en-us",
            "externalLinks": {
              "twitter": [{ "url": "https://twitter.com/Yankees" }],
              "wiki": [
                { "url": "https://en.wikipedia.org/wiki/New_York_Yankees" }
              ],
              "facebook": [{ "url": "https://www.facebook.com/Yankees" }],
              "instagram": [{ "url": "https://www.instagram.com/yankees" }],
              "homepage": [{ "url": "https://www.mlb.com/yankees" }]
            },
            "images": [
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RETINA_LANDSCAPE_16_9.jpg",
                "width": 1136,
                "height": 639,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RECOMENDATION_16_9.jpg",
                "width": 100,
                "height": 56,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_TABLET_LANDSCAPE_16_9.jpg",
                "width": 1024,
                "height": 576,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_TABLET_LANDSCAPE_3_2.jpg",
                "width": 1024,
                "height": 683,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_EVENT_DETAIL_PAGE_16_9.jpg",
                "width": 205,
                "height": 115,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RETINA_PORTRAIT_16_9.jpg",
                "width": 640,
                "height": 360,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_RETINA_PORTRAIT_3_2.jpg",
                "width": 640,
                "height": 427,
                "fallback": false
              },
              {
                "ratio": "4_3",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_CUSTOM.jpg",
                "width": 305,
                "height": 225,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_ARTIST_PAGE_3_2.jpg",
                "width": 305,
                "height": 203,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/4af/0f77afd9-acc2-4347-aa81-66aa7004f4af_1343881_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                "width": 2048,
                "height": 1152,
                "fallback": false
              }
            ],
            "classifications": [
              {
                "primary": true,
                "segment": { "id": "KZFzniwnSyZfZ7v7nE", "name": "Sports" },
                "genre": { "id": "KnvZfZ7vAdv", "name": "Baseball" },
                "subGenre": { "id": "KZazBEonSMnZfZ7vF1n", "name": "MLB" },
                "type": { "id": "KZAyXgnZfZ7v7l1", "name": "Group" },
                "subType": { "id": "KZFzBErXgnZfZ7vA7d", "name": "Team" },
                "family": false
              }
            ],
            "upcomingEvents": {
              "tmr": 29,
              "ticketmaster": 133,
              "_total": 162,
              "_filtered": 0
            },
            "_links": {
              "self": {
                "href": "/discovery/v2/attractions/K8vZ9171okV?locale=en-us"
              }
            }
          },
          {
            "name": "Milwaukee Brewers",
            "type": "attraction",
            "id": "K8vZ91718H7",
            "test": false,
            "url": "https://www.ticketmaster.com/milwaukee-brewers-tickets/artist/805968",
            "locale": "en-us",
            "externalLinks": {
              "twitter": [{ "url": "https://twitter.com/brewers" }],
              "wiki": [
                { "url": "https://en.wikipedia.org/wiki/Milwaukee_Brewers" }
              ],
              "facebook": [{ "url": "https://www.facebook.com/brewers" }],
              "instagram": [{ "url": "https://www.instagram.com/brewers" }],
              "homepage": [{ "url": "https://www.mlb.com/brewers" }]
            },
            "images": [
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/079/5273655c-833e-465b-b671-d064a3f42079_1344031_TABLET_LANDSCAPE_16_9.jpg",
                "width": 1024,
                "height": 576,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/079/5273655c-833e-465b-b671-d064a3f42079_1344031_RETINA_PORTRAIT_16_9.jpg",
                "width": 640,
                "height": 360,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/079/5273655c-833e-465b-b671-d064a3f42079_1344031_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                "width": 2048,
                "height": 1152,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/079/5273655c-833e-465b-b671-d064a3f42079_1344031_RETINA_PORTRAIT_3_2.jpg",
                "width": 640,
                "height": 427,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/079/5273655c-833e-465b-b671-d064a3f42079_1344031_RECOMENDATION_16_9.jpg",
                "width": 100,
                "height": 56,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/079/5273655c-833e-465b-b671-d064a3f42079_1344031_RETINA_LANDSCAPE_16_9.jpg",
                "width": 1136,
                "height": 639,
                "fallback": false
              },
              {
                "ratio": "4_3",
                "url": "https://s1.ticketm.net/dam/a/079/5273655c-833e-465b-b671-d064a3f42079_1344031_CUSTOM.jpg",
                "width": 305,
                "height": 225,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/079/5273655c-833e-465b-b671-d064a3f42079_1344031_EVENT_DETAIL_PAGE_16_9.jpg",
                "width": 205,
                "height": 115,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/079/5273655c-833e-465b-b671-d064a3f42079_1344031_TABLET_LANDSCAPE_3_2.jpg",
                "width": 1024,
                "height": 683,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/079/5273655c-833e-465b-b671-d064a3f42079_1344031_ARTIST_PAGE_3_2.jpg",
                "width": 305,
                "height": 203,
                "fallback": false
              }
            ],
            "classifications": [
              {
                "primary": true,
                "segment": { "id": "KZFzniwnSyZfZ7v7nE", "name": "Sports" },
                "genre": { "id": "KnvZfZ7vAdv", "name": "Baseball" },
                "subGenre": { "id": "KZazBEonSMnZfZ7vF1n", "name": "MLB" },
                "type": { "id": "KZAyXgnZfZ7v7l1", "name": "Group" },
                "subType": { "id": "KZFzBErXgnZfZ7vA7d", "name": "Team" },
                "family": false
              }
            ],
            "upcomingEvents": {
              "tmr": 63,
              "ticketmaster": 15,
              "_total": 78,
              "_filtered": 0
            },
            "_links": {
              "self": {
                "href": "/discovery/v2/attractions/K8vZ91718H7?locale=en-us"
              }
            }
          }
        ]
      }
    }
  ]
  // setevents([

  // ])
  // const updateEvents = async()=>{
  //     const response = await fetch("https://app.ticketmaster.com/discovery/v2/events.json?size=1&page=1&apikey=dtAGcR8RgkGmi0ttY31iJiencsgc33LA");

  // }
  // useEffect(() => {
  //   updateEvents();

  // }, [])

  return (
    <>
      <div className='container'>
        <h1 className='container text-center my-4'>This are Events </h1>
        <div className='row'>
          {events.map((element) => {
            console.log("the object is : ",element.name)
            return (
              <div className='col-md-4' key={element.url}>
                <EventItem
                  title={element.name}
                  type={element.type}
                  url={element.url}
                  img = {element.images[5].url}
                  venue = {element._embedded.venues[0].name}
                  date = {element.dates.start.dateTime}
                  timeZone = {element.dates.timezone}
                  minPrice = {element.priceRanges[0].min}
                  maxPrice= {element.priceRanges[0].max}
                  currency = {element.priceRanges[0].currency}
                 />
              </div>
            );
          })}
          {/* <div className="col-md-4">
        <EventItem title='1' type = '2' url='3'/>
        </div>
        <div className="col-md-4">
        <EventItem title='2' />
        </div>
        <div className="col-md-4">
        <EventItem title='3' />
        </div> */}
        </div>
      </div>
    </>
  );
}
