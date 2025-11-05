import { useState } from "react";
import { Search, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SearchInputProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
}

export const SearchInput = ({ 
  placeholder = "Onde estou gastando demais?",
  onSearch 
}: SearchInputProps) => {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim() && onSearch) {
      onSearch(query);
    }
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className={`relative w-full max-w-2xl mx-auto transition-all duration-300 ${
        isFocused ? 'scale-[1.02]' : 'scale-100'
      }`}
    >
      {/* Glow effect */}
      <div 
        className={`absolute inset-0 bg-gradient-to-r from-btg-gold/30 to-blue-500/30 rounded-2xl blur-xl transition-opacity duration-300 ${
          isFocused ? 'opacity-100' : 'opacity-0'
        }`}
      />
      
      {/* Input container */}
      <div className="relative bg-background/80 backdrop-blur-xl border-2 border-white/10 rounded-2xl shadow-2xl overflow-hidden">
        <div className="flex items-center gap-3 p-2">
          {/* Search Icon */}
          <div className="pl-4">
            <Search className={`w-5 h-5 transition-colors duration-300 ${
              isFocused ? 'text-btg-gold' : 'text-muted-foreground'
            }`} />
          </div>

          {/* Input */}
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder={placeholder}
            className="flex-1 bg-transparent text-lg py-4 px-2 outline-none text-foreground placeholder:text-muted-foreground"
          />

          {/* Submit Button */}
          <Button
            type="submit"
            size="lg"
            variant="btg"
            className="rounded-xl"
            disabled={!query.trim()}
          >
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </form>
  );
};
