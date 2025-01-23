import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Star } from "lucide-react";

const Coaches = () => {
  const coaches = [
    {
      name: "Dr. Michael Chen",
      specialty: "Cardiovascular Health",
      experience: "15+ years",
      rating: 4.9,
      reviews: 128,
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop",
    },
    {
      name: "Emma Thompson",
      specialty: "Nutrition & Diet",
      experience: "12+ years",
      rating: 4.8,
      reviews: 96,
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Health Coaches</h1>
        <p className="text-muted-foreground">Connect with expert health professionals</p>
      </div>

      <div className="grid gap-6">
        {coaches.map((coach, index) => (
          <Card key={index} className="p-6 animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
            <div className="flex gap-4">
              <img
                src={coach.image}
                alt={coach.name}
                className="w-20 h-20 rounded-lg object-cover"
              />
              <div className="flex-1">
                <h2 className="text-xl font-semibold">{coach.name}</h2>
                <p className="text-muted-foreground">{coach.specialty}</p>
                <div className="flex items-center gap-2 mt-2">
                  <Star className="w-4 h-4 fill-accent text-accent" />
                  <span className="font-medium">{coach.rating}</span>
                  <span className="text-muted-foreground">({coach.reviews} reviews)</span>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm text-muted-foreground mb-4">Experience: {coach.experience}</p>
              <Button className="w-full gap-2">
                <MessageCircle className="w-4 h-4" />
                Schedule Consultation
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Coaches;