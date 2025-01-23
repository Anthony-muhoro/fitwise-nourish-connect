import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Profile = () => {
  const userData = {
    name: "Sarah Johnson",
    age: 28,
    weight: 65,
    height: 168,
    goals: ["Reduce blood pressure", "Maintain healthy weight", "Improve fitness"],
    progress: 75,
  };

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">My Profile</h1>
        <p className="text-muted-foreground">Track your fitness journey</p>
      </div>

      <Card className="p-6 space-y-6 animate-fade-up">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
            <span className="text-xl font-semibold">{userData.name.charAt(0)}</span>
          </div>
          <div>
            <h2 className="text-xl font-semibold">{userData.name}</h2>
            <p className="text-muted-foreground">{userData.age} years old</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 rounded-lg bg-secondary">
            <p className="text-sm text-muted-foreground">Weight</p>
            <p className="text-2xl font-semibold">{userData.weight}kg</p>
          </div>
          <div className="p-4 rounded-lg bg-secondary">
            <p className="text-sm text-muted-foreground">Height</p>
            <p className="text-2xl font-semibold">{userData.height}cm</p>
          </div>
        </div>

        <div>
          <h3 className="font-medium mb-2">Goals Progress</h3>
          <Progress value={userData.progress} className="h-2" />
          <p className="text-sm text-muted-foreground mt-2">{userData.progress}% completed</p>
        </div>

        <div>
          <h3 className="font-medium mb-3">Health Goals</h3>
          <div className="space-y-2">
            {userData.goals.map((goal, index) => (
              <div
                key={index}
                className="flex items-center gap-2 p-3 rounded-lg bg-primary/10"
              >
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span>{goal}</span>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Profile;