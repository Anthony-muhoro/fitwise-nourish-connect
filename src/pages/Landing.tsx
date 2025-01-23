import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-blue-900 mb-6"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
          >
            Welcome to FitWise Nourish Connect
          </motion.h1>
          <motion.p 
            className="text-xl text-blue-700 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Your personal journey to wellness starts here
          </motion.p>
          
          <motion.div 
            className="space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Button
              onClick={() => navigate("/sign-in")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg"
            >
              Sign In
            </Button>
           
          </motion.div>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8 mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, staggerChildren: 0.2 }}
        >
          {[
            {
              title: "Personalized Meal Plans",
              description: "Get customized nutrition plans tailored to your goals"
            },
            {
              title: "Expert Coaches",
              description: "Connect with certified fitness professionals"
            },
            {
              title: "Track Progress",
              description: "Monitor your fitness journey with detailed analytics"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold text-blue-800 mb-3">{feature.title}</h3>
              <p className="text-blue-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Landing;