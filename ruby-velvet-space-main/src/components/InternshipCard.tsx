import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar } from "lucide-react";

interface InternshipCardProps {
  company: string;
  role: string;
  duration: string;
  description: string;
  skills?: string[];
}

const InternshipCard = ({ company, role, duration, description, skills }: InternshipCardProps) => {
  return (
    <Card className="group bg-card border-border hover:border-primary/50 transition-all duration-500 hover:shadow-[0_10px_40px_hsl(var(--primary)/0.2)] hover:-translate-y-1">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
            <Briefcase className="text-primary" size={24} />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-1 text-foreground group-hover:text-primary transition-colors duration-300">
              {role}
            </h3>
            <p className="text-lg text-muted-foreground font-medium mb-2">{company}</p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
              <Calendar size={16} />
              <span>{duration}</span>
            </div>
            <p className="text-muted-foreground mb-4">{description}</p>
            {skills && skills.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="outline" className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
                    {skill}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default InternshipCard;
