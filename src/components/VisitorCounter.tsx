import { useState, useEffect } from "react";
import { Users } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

export const VisitorCounter = () => {
  const [visitorCount, setVisitorCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const trackVisitor = async () => {
      try {
        console.log('Tracking visitor...');
        
        // Generate a session ID for this session
        const sessionId = sessionStorage.getItem('visitor_session') || 
          `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
        
        // Store session ID if not already stored (new visitor)
        if (!sessionStorage.getItem('visitor_session')) {
          console.log('New visitor, inserting record...');
          sessionStorage.setItem('visitor_session', sessionId);
          
          // Insert visitor record
          const { error: insertError } = await supabase
            .from('visitors')
            .insert({
              session_id: sessionId,
              page_url: window.location.pathname,
              visited_at: new Date().toISOString()
            });

          if (insertError) {
            console.error('Error tracking visitor:', insertError);
          } else {
            console.log('Visitor tracked successfully');
          }
        } else {
          console.log('Returning visitor in same session');
        }

        // Get total visitor count
        console.log('Fetching visitor count...');
        const { count, error: countError } = await supabase
          .from('visitors')
          .select('*', { count: 'exact', head: true });

        if (countError) {
          console.error('Error fetching visitor count:', countError);
          // Fallback to localStorage count if database fails
          const fallbackCount = parseInt(localStorage.getItem('fallback_visitor_count') || '0');
          setVisitorCount(fallbackCount);
        } else {
          console.log('Visitor count fetched:', count);
          setVisitorCount(count || 0);
          // Store as fallback
          localStorage.setItem('fallback_visitor_count', (count || 0).toString());
        }
      } catch (error) {
        console.error('Error in visitor tracking:', error);
        // Fallback to localStorage count
        const fallbackCount = parseInt(localStorage.getItem('fallback_visitor_count') || '0');
        setVisitorCount(fallbackCount);
      } finally {
        setIsLoading(false);
      }
    };

    trackVisitor();
  }, []);

  if (isLoading) {
    return (
      <div className="fixed top-2 right-2 sm:top-4 sm:right-4 z-50 bg-card/80 backdrop-blur-sm border border-border/50 rounded-lg sm:rounded-xl p-2 sm:p-3 animate-fade-in max-w-[160px] sm:max-w-none">
        <div className="flex items-center space-x-1 sm:space-x-2">
          <Users className="w-3 h-3 sm:w-4 sm:h-4 text-primary animate-pulse flex-shrink-0" />
          <span className="text-xs sm:text-sm font-medium truncate">
            <span className="text-muted-foreground">Loading...</span>
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed top-2 right-2 sm:top-4 sm:right-4 z-50 bg-card/80 backdrop-blur-sm border border-border/50 rounded-lg sm:rounded-xl p-2 sm:p-3 animate-fade-in max-w-[200px] sm:max-w-none">
      <div className="flex items-center space-x-1 sm:space-x-2">
        <Users className="w-3 h-3 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
        <span className="text-xs sm:text-sm font-medium">
          <span className="text-primary font-bold">{visitorCount.toLocaleString()}</span>
          <span className="text-muted-foreground ml-1 hidden sm:inline"> Visitors 👀 watching the takeoff!</span>
          <span className="text-muted-foreground ml-1 sm:hidden"> Visitors</span>
        </span>
      </div>
    </div>
  );
};