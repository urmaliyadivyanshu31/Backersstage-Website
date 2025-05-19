"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Coffee,
  Users,
  Mic,
  Monitor,
  Utensils,
  DoorOpen,
  Clock,
  Maximize,
  Minimize,
  RotateCcw,
  Search,
  X,
  Info,
  Star,
  Briefcase,
  Wifi,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type PointOfInterest = {
  id: string;
  name: string;
  description: string;
  type:
    | "stage"
    | "demo"
    | "networking"
    | "vip"
    | "food"
    | "registration"
    | "sponsor"
    | "meeting"
    | "restroom"
    | "exit"
    | "wifi";
  position: { x: number; y: number };
  icon: React.ElementType;
  color: string;
  details?: {
    time?: string;
    capacity?: string;
    notes?: string;
  };
  image?: string;
};

type VenueMapProps = {
  className?: string;
};

export function InteractiveVenueMap({ className }: VenueMapProps) {
  const [activePoint, setActivePoint] = useState<string | null>(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredType, setFilteredType] = useState<string | null>(null);
  const [showLegend, setShowLegend] = useState(true);
  const mapContainerRef = useRef<HTMLDivElement>(null);

  const pointsOfInterest: PointOfInterest[] = [
    {
      id: "main-stage",
      name: "Main Stage",
      description:
        "Primary presentation area for keynotes and major announcements",
      type: "stage",
      position: { x: 50, y: 30 },
      icon: Mic,
      color: "bg-purple-500",
      details: {
        time: "All day",
        capacity: "200 seats",
        notes: "Full A/V setup with dual projection screens",
      },
      image: "/modern-stage.png",
    },
    {
      id: "demo-area-1",
      name: "Builder Showcase Zone A",
      description: "Demonstration area for technical projects and prototypes",
      type: "demo",
      position: { x: 30, y: 50 },
      icon: Monitor,
      color: "bg-blue-500",
      details: {
        time: "4:30 PM - 6:30 PM",
        capacity: "8 demo stations",
        notes: "High-speed internet and power outlets available",
      },
    },
    {
      id: "demo-area-2",
      name: "Builder Showcase Zone B",
      description: "Demonstration area for technical projects and prototypes",
      type: "demo",
      position: { x: 70, y: 50 },
      icon: Monitor,
      color: "bg-blue-500",
      details: {
        time: "4:30 PM - 6:30 PM",
        capacity: "8 demo stations",
        notes: "High-speed internet and power outlets available",
      },
    },
    {
      id: "networking-lounge",
      name: "Networking Lounge",
      description: "Open space for casual meetings and conversations",
      type: "networking",
      position: { x: 50, y: 70 },
      icon: Users,
      color: "bg-green-500",
      details: {
        capacity: "100 people",
        notes: "Comfortable seating arrangements for group discussions",
      },
      image: "/modern-networking-lounge.png",
    },
    {
      id: "vip-area",
      name: "VIP Founder-VC Lounge",
      description: "Exclusive area for founders and investors to connect",
      type: "vip",
      position: { x: 80, y: 30 },
      icon: Star,
      color: "bg-amber-500",
      details: {
        time: "5:00 PM - 7:30 PM",
        capacity: "50 people",
        notes: "Private meeting booths available by reservation",
      },
    },
    {
      id: "refreshments",
      name: "Refreshment Area",
      description: "Food and beverages station",
      type: "food",
      position: { x: 20, y: 70 },
      icon: Utensils,
      color: "bg-red-500",
      details: {
        time: "Continuous service",
        notes: "Complimentary refreshments for all attendees",
      },
    },
    {
      id: "coffee-bar",
      name: "Coffee Bar",
      description: "Premium coffee and tea service",
      type: "food",
      position: { x: 20, y: 30 },
      icon: Coffee,
      color: "bg-red-500",
      details: {
        time: "Continuous service",
        notes: "Specialty coffees and teas available",
      },
    },
    {
      id: "registration",
      name: "Registration Desk",
      description: "Check-in and information point",
      type: "registration",
      position: { x: 50, y: 10 },
      icon: Clock,
      color: "bg-indigo-500",
      details: {
        time: "3:30 PM - 6:00 PM",
        notes: "Badge pickup and event information",
      },
    },
    {
      id: "sponsor-area",
      name: "Sponsor Showcase",
      description: "Booths for event sponsors and partners",
      type: "sponsor",
      position: { x: 80, y: 70 },
      icon: Briefcase,
      color: "bg-cyan-500",
      details: {
        time: "All event",
        notes: "Connect with our partners and sponsors",
      },
    },
    {
      id: "meeting-room-1",
      name: "Meeting Room Alpha",
      description: "Private space for scheduled meetings",
      type: "meeting",
      position: { x: 15, y: 50 },
      icon: Users,
      color: "bg-violet-500",
      details: {
        capacity: "8 people",
        notes: "Bookable in 30-minute slots at the registration desk",
      },
    },
    {
      id: "meeting-room-2",
      name: "Meeting Room Beta",
      description: "Private space for scheduled meetings",
      type: "meeting",
      position: { x: 85, y: 50 },
      icon: Users,
      color: "bg-violet-500",
      details: {
        capacity: "8 people",
        notes: "Bookable in 30-minute slots at the registration desk",
      },
    },
    {
      id: "restrooms",
      name: "Restrooms",
      description: "Facilities",
      type: "restroom",
      position: { x: 30, y: 10 },
      icon: Info,
      color: "bg-gray-500",
    },
    {
      id: "exit-main",
      name: "Main Exit",
      description: "Primary exit to La Croisette boulevard",
      type: "exit",
      position: { x: 50, y: 90 },
      icon: DoorOpen,
      color: "bg-emerald-500",
    },
    {
      id: "wifi-zone",
      name: "High-Speed WiFi Zone",
      description: "Optimal connectivity for demos and presentations",
      type: "wifi",
      position: { x: 50, y: 50 },
      icon: Wifi,
      color: "bg-sky-500",
      details: {
        notes:
          "Network: BackersStage_Event | Password provided at registration",
      },
    },
  ];

  const filteredPoints = pointsOfInterest.filter((point) => {
    const matchesSearch =
      searchQuery === "" ||
      point.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      point.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesType = filteredType === null || point.type === filteredType;

    return matchesSearch && matchesType;
  });

  const handlePointClick = (id: string) => {
    setActivePoint(activePoint === id ? null : id);
  };

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.2, 2));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.2, 0.5));
  };

  const handleReset = () => {
    setZoomLevel(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartPos({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;

    setPosition({
      x: e.clientX - startPos.x,
      y: e.clientY - startPos.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartPos({
      x: e.touches[0].clientX - position.x,
      y: e.touches[0].clientY - position.y,
    });
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;

    setPosition({
      x: e.touches[0].clientX - startPos.x,
      y: e.touches[0].clientY - startPos.y,
    });
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const handleMouseLeave = () => {
      setIsDragging(false);
    };

    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("touchend", handleTouchEnd);

    return () => {
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "stage":
        return "Stage";
      case "demo":
        return "Demo Area";
      case "networking":
        return "Networking";
      case "vip":
        return "VIP Area";
      case "food":
        return "Food & Drinks";
      case "registration":
        return "Registration";
      case "sponsor":
        return "Sponsor";
      case "meeting":
        return "Meeting Room";
      case "restroom":
        return "Restroom";
      case "exit":
        return "Exit";
      case "wifi":
        return "WiFi Zone";
      default:
        return type;
    }
  };

  const getIconForType = (type: string) => {
    switch (type) {
      case "stage":
        return <Mic className="h-4 w-4" />;
      case "demo":
        return <Monitor className="h-4 w-4" />;
      case "networking":
        return <Users className="h-4 w-4" />;
      case "vip":
        return <Star className="h-4 w-4" />;
      case "food":
        return <Utensils className="h-4 w-4" />;
      case "registration":
        return <Clock className="h-4 w-4" />;
      case "sponsor":
        return <Briefcase className="h-4 w-4" />;
      case "meeting":
        return <Users className="h-4 w-4" />;
      case "restroom":
        return <Info className="h-4 w-4" />;
      case "exit":
        return <DoorOpen className="h-4 w-4" />;
      case "wifi":
        return <Wifi className="h-4 w-4" />;
      default:
        return <Info className="h-4 w-4" />;
    }
  };

  const getColorForType = (type: string) => {
    switch (type) {
      case "stage":
        return "bg-purple-500";
      case "demo":
        return "bg-blue-500";
      case "networking":
        return "bg-green-500";
      case "vip":
        return "bg-amber-500";
      case "food":
        return "bg-red-500";
      case "registration":
        return "bg-indigo-500";
      case "sponsor":
        return "bg-cyan-500";
      case "meeting":
        return "bg-violet-500";
      case "restroom":
        return "bg-gray-500";
      case "exit":
        return "bg-emerald-500";
      case "wifi":
        return "bg-sky-500";
      default:
        return "bg-gray-500";
    }
  };

  const uniqueTypes = Array.from(
    new Set(pointsOfInterest.map((point) => point.type))
  );

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm",
        className
      )}
    >
      <div className="p-4 border-b border-neutral-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h3 className="text-xl font-bold">Espace Croisette Venue Map</h3>
          <p className="text-sm text-neutral-400">
            Interactive floor plan of the event space
          </p>
        </div>

        <div className="flex items-center gap-2 self-end">
          <Button
            variant="outline"
            size="sm"
            className="h-8 px-2 text-xs"
            onClick={() => setShowLegend(!showLegend)}
          >
            {showLegend ? "Hide Legend" : "Show Legend"}
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8"
            onClick={handleZoomIn}
          >
            <Maximize className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8"
            onClick={handleZoomOut}
          >
            <Minimize className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8"
            onClick={handleReset}
          >
            <RotateCcw className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="p-4 border-b border-neutral-800 flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500" />
          <input
            type="text"
            placeholder="Search for areas..."
            className="w-full pl-9 pr-4 py-2 bg-neutral-800 border border-neutral-700 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-accent"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button
              className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500 hover:text-neutral-300"
              onClick={() => setSearchQuery("")}
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        <div className="flex flex-wrap gap-2">
          <Button
            variant={filteredType === null ? "default" : "outline"}
            size="sm"
            className="h-8 text-xs"
            onClick={() => setFilteredType(null)}
          >
            All
          </Button>
          {uniqueTypes.map((type) => (
            <Button
              key={type}
              variant={filteredType === type ? "default" : "outline"}
              size="sm"
              className="h-8 text-xs"
              onClick={() =>
                setFilteredType(filteredType === type ? null : type)
              }
            >
              <span
                className={`h-2 w-2 rounded-full ${getColorForType(
                  type
                )} mr-1.5`}
              ></span>
              {getTypeLabel(type)}
            </Button>
          ))}
        </div>
      </div>

      <div className="relative flex h-[600px]">
        {/* Map Container */}
        <div
          ref={mapContainerRef}
          className={cn(
            "relative flex-1 overflow-hidden cursor-grab",
            isDragging && "cursor-grabbing"
          )}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Floor Plan */}
          <div
            className="absolute inset-0 bg-neutral-900"
            style={{
              transform: `translate(${position.x}px, ${position.y}px) scale(${zoomLevel})`,
              transformOrigin: "center",
              transition: isDragging ? "none" : "transform 0.2s ease-out",
            }}
          >
            {/* Venue outline */}
            <div className="absolute inset-5 border-2 border-neutral-700 rounded-xl bg-neutral-800/30">
              {/* Main areas */}
              <div className="absolute inset-0 p-4">
                {/* Stage area */}
                <div className="absolute top-[10%] left-[30%] right-[30%] h-[25%] border border-purple-800/50 bg-purple-900/10 rounded-lg flex items-center justify-center">
                  <div className="text-xs text-purple-300/70 font-medium">
                    Main Stage
                  </div>
                </div>

                {/* Demo areas */}
                <div className="absolute top-[40%] left-[10%] w-[30%] h-[20%] border border-blue-800/50 bg-blue-900/10 rounded-lg flex items-center justify-center">
                  <div className="text-xs text-blue-300/70 font-medium">
                    Demo Zone A
                  </div>
                </div>
                <div className="absolute top-[40%] right-[10%] w-[30%] h-[20%] border border-blue-800/50 bg-blue-900/10 rounded-lg flex items-center justify-center">
                  <div className="text-xs text-blue-300/70 font-medium">
                    Demo Zone B
                  </div>
                </div>

                {/* Networking area */}
                <div className="absolute bottom-[15%] left-[30%] right-[30%] h-[25%] border border-green-800/50 bg-green-900/10 rounded-lg flex items-center justify-center">
                  <div className="text-xs text-green-300/70 font-medium">
                    Networking Area
                  </div>
                </div>

                {/* VIP area */}
                <div className="absolute top-[15%] right-[10%] w-[20%] h-[20%] border border-amber-800/50 bg-amber-900/10 rounded-lg flex items-center justify-center">
                  <div className="text-xs text-amber-300/70 font-medium">
                    VIP
                  </div>
                </div>

                {/* Food areas */}
                <div className="absolute top-[15%] left-[10%] w-[15%] h-[15%] border border-red-800/50 bg-red-900/10 rounded-lg flex items-center justify-center">
                  <div className="text-xs text-red-300/70 font-medium">
                    Coffee
                  </div>
                </div>
                <div className="absolute bottom-[15%] left-[10%] w-[15%] h-[15%] border border-red-800/50 bg-red-900/10 rounded-lg flex items-center justify-center">
                  <div className="text-xs text-red-300/70 font-medium">
                    Food
                  </div>
                </div>

                {/* Sponsor area */}
                <div className="absolute bottom-[15%] right-[10%] w-[15%] h-[15%] border border-cyan-800/50 bg-cyan-900/10 rounded-lg flex items-center justify-center">
                  <div className="text-xs text-cyan-300/70 font-medium">
                    Sponsors
                  </div>
                </div>

                {/* Meeting rooms */}
                <div className="absolute top-[45%] left-[5%] w-[10%] h-[10%] border border-violet-800/50 bg-violet-900/10 rounded-lg flex items-center justify-center">
                  <div className="text-xs text-violet-300/70 font-medium">
                    Meeting A
                  </div>
                </div>
                <div className="absolute top-[45%] right-[5%] w-[10%] h-[10%] border border-violet-800/50 bg-violet-900/10 rounded-lg flex items-center justify-center">
                  <div className="text-xs text-violet-300/70 font-medium">
                    Meeting B
                  </div>
                </div>

                {/* Entrance/Exit */}
                <div className="absolute bottom-[5%] left-[45%] right-[45%] h-[5%] border border-emerald-800/50 bg-emerald-900/10 rounded-lg flex items-center justify-center">
                  <div className="text-xs text-emerald-300/70 font-medium">
                    Exit
                  </div>
                </div>

                {/* Registration */}
                <div className="absolute top-[5%] left-[40%] right-[40%] h-[5%] border border-indigo-800/50 bg-indigo-900/10 rounded-lg flex items-center justify-center">
                  <div className="text-xs text-indigo-300/70 font-medium">
                    Registration
                  </div>
                </div>
              </div>
            </div>

            {/* Points of Interest */}
            {filteredPoints.map((point) => (
              <div
                key={point.id}
                className={cn(
                  "absolute w-6 h-6 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300",
                  activePoint === point.id
                    ? "z-20 scale-125"
                    : "z-10 hover:scale-110"
                )}
                style={{
                  left: `${point.position.x}%`,
                  top: `${point.position.y}%`,
                }}
                onClick={() => handlePointClick(point.id)}
              >
                <div
                  className={cn(
                    "w-full h-full rounded-full flex items-center justify-center",
                    point.color,
                    activePoint === point.id ? "ring-2 ring-white" : ""
                  )}
                >
                  <point.icon className="h-3 w-3 text-white" />
                </div>

                <div
                  className={cn(
                    "absolute top-full left-1/2 -translate-x-1/2 mt-1 text-xs font-medium text-center whitespace-nowrap px-1.5 py-0.5 rounded-full bg-neutral-800",
                    activePoint === point.id
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-100"
                  )}
                >
                  {point.name}
                </div>

                {/* Pulse animation for active point */}
                {activePoint === point.id && (
                  <div
                    className="absolute inset-0 rounded-full animate-ping-slow opacity-30"
                    style={{ backgroundColor: point.color.replace("bg-", "") }}
                  ></div>
                )}
              </div>
            ))}
          </div>

          {/* Active Point Details */}
          <AnimatePresence>
            {activePoint && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-4 left-4 right-4 bg-neutral-800/90 backdrop-blur-sm border border-neutral-700 rounded-lg p-4 shadow-xl z-30"
              >
                {pointsOfInterest
                  .filter((p) => p.id === activePoint)
                  .map((point) => (
                    <div
                      key={point.id}
                      className="flex flex-col sm:flex-row gap-4"
                    >
                      {point.image && (
                        <div className="sm:w-1/3 rounded-lg overflow-hidden">
                          <Image
                            src={point.image || "/placeholder.svg"}
                            alt={point.name}
                            width={300}
                            height={200}
                            className="w-full h-auto object-cover"
                          />
                        </div>
                      )}

                      <div className={point.image ? "sm:w-2/3" : "w-full"}>
                        <div className="flex items-center gap-2 mb-2">
                          <div
                            className={cn(
                              "w-6 h-6 rounded-full flex items-center justify-center",
                              point.color
                            )}
                          >
                            <point.icon className="h-3 w-3 text-white" />
                          </div>
                          <h3 className="text-lg font-bold">{point.name}</h3>
                          <div className="ml-auto">
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-6 w-6"
                              onClick={() => setActivePoint(null)}
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>

                        <p className="text-neutral-300 mb-3">
                          {point.description}
                        </p>

                        {point.details && (
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                            {point.details.time && (
                              <div className="flex items-center gap-2">
                                <Clock className="h-4 w-4 text-neutral-400" />
                                <span>{point.details.time}</span>
                              </div>
                            )}

                            {point.details.capacity && (
                              <div className="flex items-center gap-2">
                                <Users className="h-4 w-4 text-neutral-400" />
                                <span>{point.details.capacity}</span>
                              </div>
                            )}

                            {point.details.notes && (
                              <div className="flex items-start gap-2 col-span-full">
                                <Info className="h-4 w-4 text-neutral-400 mt-0.5" />
                                <span>{point.details.notes}</span>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Legend */}
        {showLegend && (
          <div className="w-64 border-l border-neutral-800 bg-neutral-900/50 backdrop-blur-sm p-4 overflow-y-auto hidden md:block">
            <h4 className="font-medium mb-3">Map Legend</h4>
            <div className="space-y-3">
              {uniqueTypes.map((type) => (
                <div
                  key={type}
                  className={cn(
                    "flex items-center gap-2 p-2 rounded-md transition-colors",
                    filteredType === type
                      ? "bg-neutral-800"
                      : "hover:bg-neutral-800/50"
                  )}
                  onClick={() =>
                    setFilteredType(filteredType === type ? null : type)
                  }
                >
                  <div
                    className={cn(
                      "w-4 h-4 rounded-full flex items-center justify-center",
                      getColorForType(type)
                    )}
                  >
                    {getIconForType(type)}
                  </div>
                  <span className="text-sm">{getTypeLabel(type)}</span>
                  <div className="ml-auto text-xs text-neutral-500">
                    {pointsOfInterest.filter((p) => p.type === type).length}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-700">
              <h4 className="font-medium mb-2">Navigation Tips</h4>
              <ul className="text-xs text-neutral-400 space-y-2">
                <li className="flex items-center gap-2">
                  <Maximize className="h-3 w-3" /> Zoom in to see details
                </li>
                <li className="flex items-center gap-2">
                  <Minimize className="h-3 w-3" /> Zoom out for overview
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-neutral-600"></div>{" "}
                  Click points for details
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
