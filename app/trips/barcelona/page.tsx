"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { MapPin, Clock, Calendar, Utensils, Hotel, Plane, Ship, Church, Mountain, Coffee } from "lucide-react";

interface TimelineEvent {
  time: string;
  title: string;
  description?: string;
  location?: string;
  address?: string;
  googleMapsLink?: string;
  neighborhood?: string;
  type: "travel" | "meal" | "activity" | "accommodation" | "sightseeing" | "rest";
  confirmed?: boolean;
}

interface DaySchedule {
  date: string;
  dayOfWeek: string;
  events: TimelineEvent[];
}

const itinerary: DaySchedule[] = [
  {
    date: "September 9, 2025",
    dayOfWeek: "Tuesday",
    events: [
      {
        time: "8:00 PM",
        title: "Arrive in Barcelona",
        type: "travel",
        confirmed: true,
      },
      {
        time: "9:00 PM",
        title: "Check in to Hotel",
        type: "accommodation",
        confirmed: true,
      },
      {
        time: "10:15 PM",
        title: "Depart for Dinner",
        type: "travel",
        confirmed: true,
      },
      {
        time: "10:30 PM",
        title: "Dinner at Blavis",
        location: "Blavis",
        neighborhood: "Eixample",
        googleMapsLink: "https://maps.google.com/?q=Blavis+Barcelona",
        type: "meal",
        confirmed: true,
      },
      {
        time: "12:30 AM",
        title: "Taxi to Plaça de Catalunya",
        type: "travel",
        confirmed: true,
      },
      {
        time: "12:30 AM - 2:00 AM",
        title: "Explore Barri Gòtic",
        description: "Walk around the Gothic Quarter",
        neighborhood: "Barri Gòtic",
        type: "activity",
        confirmed: true,
      },
      {
        time: "2:00 AM",
        title: "Return to Hotel",
        type: "accommodation",
        confirmed: true,
      },
    ],
  },
  {
    date: "September 10, 2025",
    dayOfWeek: "Wednesday",
    events: [
      {
        time: "Morning",
        title: "Slow Morning",
        description: "Rest and recover",
        type: "rest",
        confirmed: true,
      },
      {
        time: "12:00 PM",
        title: "Lunch at Soma",
        location: "Soma",
        googleMapsLink: "https://maps.google.com/?q=Soma+Barcelona",
        type: "meal",
        confirmed: true,
      },
      {
        time: "1:30 PM",
        title: "Walk towards La Rambla",
        type: "activity",
        confirmed: true,
      },
      {
        time: "2:30 PM",
        title: "Taxi to Port",
        type: "travel",
        confirmed: true,
      },
      {
        time: "3:00 PM - 7:00 PM",
        title: "Cruise from Port Olímpic",
        description: "Mediterranean cruise",
        location: "Port Olímpic",
        type: "activity",
        confirmed: true,
      },
      {
        time: "7:00 PM - 9:30 PM",
        title: "Hotel Break",
        description: "Freshen up and get ready for dinner",
        type: "rest",
        confirmed: true,
      },
      {
        time: "9:30 PM",
        title: "Taxi to Restaurant",
        type: "travel",
        confirmed: true,
      },
      {
        time: "10:00 PM",
        title: "Dinner (TBD)",
        description: "Options: Enigma, Compartir, Nobu, Altamar, or Il Milione",
        type: "meal",
        confirmed: false,
      },
      {
        time: "After Dinner",
        title: "Evening Plans (TBD)",
        description: "Walk around, then nightcap somewhere",
        type: "activity",
        confirmed: false,
      },
    ],
  },
  {
    date: "September 11, 2025",
    dayOfWeek: "Thursday",
    events: [
      {
        time: "Morning",
        title: "Slow Morning",
        description: "Relaxed start to the day",
        type: "rest",
        confirmed: true,
      },
      {
        time: "12:00 PM",
        title: "Lunch (TBD)",
        description: "Options: Tejada Mar, Babular Bar, or Tierra Trágame",
        type: "meal",
        confirmed: false,
      },
      {
        time: "2:00 PM",
        title: "Visit Sagrada Família",
        location: "Sagrada Família",
        neighborhood: "Eixample",
        googleMapsLink: "https://maps.google.com/?q=Sagrada+Familia+Barcelona",
        type: "sightseeing",
        confirmed: true,
      },
      {
        time: "3:30 PM",
        title: "Montjuïc",
        location: "Montjuïc",
        type: "sightseeing",
        confirmed: true,
      },
      {
        time: "4:30 PM",
        title: "Cable Car to Beach",
        description: "Take the cable car down to the beach",
        type: "activity",
        confirmed: true,
      },
      {
        time: "4:30 PM - 5:30 PM",
        title: "Explore Barceloneta",
        neighborhood: "Barceloneta",
        type: "activity",
        confirmed: true,
      },
      {
        time: "6:00 PM",
        title: "Return to Hotel",
        type: "accommodation",
        confirmed: true,
      },
      {
        time: "9:00 PM",
        title: "Dinner at Teatro",
        location: "Teatro",
        googleMapsLink: "https://maps.google.com/?q=Teatro+Barcelona",
        type: "meal",
        confirmed: true,
      },
      {
        time: "After Dinner",
        title: "Evening Plans (TBD)",
        type: "activity",
        confirmed: false,
      },
    ],
  },
];

const getIcon = (type: TimelineEvent["type"]) => {
  switch (type) {
    case "travel":
      return <Plane className="w-4 h-4" />;
    case "meal":
      return <Utensils className="w-4 h-4" />;
    case "accommodation":
      return <Hotel className="w-4 h-4" />;
    case "activity":
      return <Ship className="w-4 h-4" />;
    case "sightseeing":
      return <Church className="w-4 h-4" />;
    case "rest":
      return <Coffee className="w-4 h-4" />;
    default:
      return <Clock className="w-4 h-4" />;
  }
};

const getTypeColor = (type: TimelineEvent["type"]) => {
  switch (type) {
    case "travel":
      return "bg-blue-500";
    case "meal":
      return "bg-orange-500";
    case "accommodation":
      return "bg-purple-500";
    case "activity":
      return "bg-green-500";
    case "sightseeing":
      return "bg-pink-500";
    case "rest":
      return "bg-gray-500";
    default:
      return "bg-gray-400";
  }
};

export default function BarcelonaTrip() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-light tracking-tight text-gray-900 mb-4">
            Barcelona
          </h1>
          <p className="text-lg text-gray-600 font-light">
            September 9-11, 2025
          </p>
        </div>

        <div className="space-y-8">
          {itinerary.map((day, dayIndex) => (
            <Card key={dayIndex} className="border-0 shadow-lg bg-white/80 backdrop-blur">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl font-light">
                      {day.dayOfWeek}
                    </CardTitle>
                    <p className="text-sm text-gray-500 mt-1 flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {day.date}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <div className="absolute left-6 top-0 bottom-0 w-px bg-gray-200"></div>
                  
                  <div className="space-y-6">
                    {day.events.map((event, eventIndex) => (
                      <div key={eventIndex} className="flex gap-4 relative">
                        <div className="relative z-10">
                          <div
                            className={`w-12 h-12 rounded-full ${getTypeColor(
                              event.type
                            )} bg-opacity-10 flex items-center justify-center`}
                          >
                            <div
                              className={`w-8 h-8 rounded-full ${getTypeColor(
                                event.type
                              )} flex items-center justify-center text-white`}
                            >
                              {getIcon(event.type)}
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex-1 pb-4">
                          <div className="flex items-start justify-between gap-4 flex-wrap">
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="text-sm text-gray-500 font-medium">
                                  {event.time}
                                </span>
                                {!event.confirmed && (
                                  <Badge variant="outline" className="text-xs">
                                    TBD
                                  </Badge>
                                )}
                              </div>
                              
                              <h3 className={`text-lg font-medium text-gray-900 ${!event.confirmed ? 'opacity-60' : ''}`}>
                                {event.title}
                              </h3>
                              
                              {event.description && (
                                <p className="text-sm text-gray-600 mt-1">
                                  {event.description}
                                </p>
                              )}
                              
                              <div className="flex flex-wrap gap-2 mt-2">
                                {event.neighborhood && (
                                  <Badge variant="secondary" className="text-xs font-normal">
                                    <MapPin className="w-3 h-3 mr-1" />
                                    {event.neighborhood}
                                  </Badge>
                                )}
                                
                                {event.googleMapsLink && (
                                  <a
                                    href={event.googleMapsLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center text-xs text-blue-600 hover:text-blue-800 transition-colors"
                                  >
                                    <MapPin className="w-3 h-3 mr-1" />
                                    View on Maps
                                  </a>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 font-light">
            Items marked as TBD are subject to change
          </p>
        </div>
      </div>
    </div>
  );
}