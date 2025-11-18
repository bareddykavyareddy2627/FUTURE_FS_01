import { Card, CardContent } from "@/components/ui/card";
import { Award, Calendar, ExternalLink } from "lucide-react";

interface AchievementCardProps {
  title: string;
  date: string;
  description: string;
  link?: string;
}

const AchievementCard = ({ title, date, description, link }: AchievementCardProps) => {
  return (
    <Card className="group bg-card border-border hover:border-accent/50 transition-all duration-500 hover:shadow-[0_10px_40px_hsl(var(--accent)/0.2)] hover:-translate-y-1">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors duration-300 flex-shrink-0">
            <Award className="text-accent" size={24} />
          </div>
          <div className="flex-1">
            <div className="flex items-start justify-between gap-2 mb-2">
              <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                {title}
              </h3>
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent/80 transition-colors duration-300"
                >
                  <ExternalLink size={18} />
                </a>
              )}
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
              <Calendar size={14} />
              <span>{date}</span>
            </div>
            <p className="text-muted-foreground">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AchievementCard;
