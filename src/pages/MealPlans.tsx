import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const MealPlans = () => {
  const [selectedDay, setSelectedDay] = useState(0);
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  const weeklyMeals = {
    Monday: {
      breakfast: "Oatmeal with berries and almonds",
      lunch: "Grilled chicken salad with olive oil dressing",
      dinner: "Baked salmon with quinoa and steamed vegetables",
    },
    Tuesday: {
      breakfast: "Greek yogurt with honey and walnuts",
      lunch: "Turkey and avocado wrap with whole grain bread",
      dinner: "Lean beef stir-fry with brown rice",
    },
    Wednesday: {
      breakfast: "Whole grain toast with avocado and eggs",
      lunch: "Mediterranean quinoa bowl with chickpeas",
      dinner: "Grilled fish with roasted vegetables",
    },
    Thursday: {
      breakfast: "Smoothie bowl with banana and chia seeds",
      lunch: "Lentil soup with whole grain bread",
      dinner: "Chicken breast with sweet potato mash",
    },
    Friday: {
      breakfast: "Overnight oats with apple and cinnamon",
      lunch: "Tuna salad with mixed greens",
      dinner: "Turkey meatballs with zucchini noodles",
    },
    Saturday: {
      breakfast: "Whole grain pancakes with fresh berries",
      lunch: "Quinoa and black bean bowl",
      dinner: "Grilled tofu with brown rice and vegetables",
    },
    Sunday: {
      breakfast: "Fruit and nut parfait with yogurt",
      lunch: "Vegetable soup with whole grain crackers",
      dinner: "Baked cod with roasted potatoes and asparagus",
    }
  };

  const handlePrevDay = () => setSelectedDay((prev) => (prev > 0 ? prev - 1 : 6));
  const handleNextDay = () => setSelectedDay((prev) => (prev < 6 ? prev + 1 : 0));

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Meal Plans</h1>
        <p className="text-muted-foreground">Your personalized meal plan for the week</p>
      </div>

      <Card className="p-6 animate-fade-up">
        <div className="flex items-center justify-between mb-6">
          <Button variant="outline" size="icon" onClick={handlePrevDay}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <h2 className="text-xl font-semibold">{days[selectedDay]}</h2>
          <Button variant="outline" size="icon" onClick={handleNextDay}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="space-y-6">
          {["breakfast", "lunch", "dinner"].map((meal) => (
            <div key={meal} className="space-y-2">
              <h3 className="capitalize text-lg font-medium">{meal}</h3>
              <div className="p-4 rounded-lg bg-secondary">
                <p>{weeklyMeals[days[selectedDay] as keyof typeof weeklyMeals]?.[meal as keyof typeof weeklyMeals.Monday]}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default MealPlans;