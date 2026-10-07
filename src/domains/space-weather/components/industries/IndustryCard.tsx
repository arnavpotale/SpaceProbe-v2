import React from 'react';
import { ArrowRight, Activity, Database, BarChart3, Info } from 'lucide-react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import type { IndustryItem } from '../../data/industries-data';

interface IndustryCardProps {
  industry: IndustryItem;
}

export function IndustryCard({ industry: ind }: IndustryCardProps) {
  return (
    <Card className="h-full flex flex-col bg-[#0E1334]/80 backdrop-blur-md border-[#D8ECF9]/15 hover:border-[#00a8ff]/40 transition-all duration-300 group relative overflow-hidden shadow-xl hover:shadow-[0_0_30px_rgba(0,168,255,0.15)]">
      {/* Top Accent Strip */}
      <div
        className={`absolute top-0 left-0 w-full h-1 ${ind.bgColor.replace('/10', '/60')} opacity-60 group-hover:opacity-100 transition-opacity`}
      />

      <CardHeader className="p-6 pb-3">
        <div className="flex justify-between items-start mb-4">
          <div className={`p-3 rounded-2xl ${ind.bgColor} ${ind.color} ring-1 ring-white/10`}>
            <ind.icon className="h-6 w-6" />
          </div>
          <Badge variant="secondary" className="text-[10px] uppercase font-mono">
            {ind.title}
          </Badge>
        </div>

        <CardTitle className="text-xl font-display font-bold text-white group-hover:text-[#00a8ff] transition-colors mb-2">
          {ind.title}
        </CardTitle>

        <CardDescription className="text-xs sm:text-sm leading-relaxed text-[#D8ECF9]/75 line-clamp-3 font-light">
          {ind.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-1 p-6 pt-2">
        <div className="space-y-3">
          <p className="text-[10px] font-mono font-bold text-[#D8ECF9]/60 uppercase tracking-wider flex items-center gap-1.5">
            <Activity className="h-3 w-3 text-[#00a8ff]" /> Key Risk Factors
          </p>
          <div className="flex flex-wrap gap-1.5">
            {ind.keyFactors.map((factor, i) => (
              <Badge
                key={i}
                variant="outline"
                className="border-white/10 bg-white/5 text-[#D8ECF9] px-2 py-0.5 text-[11px] font-normal"
              >
                {factor}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-3 border-t border-white/5">
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              className="w-full justify-between hover:text-[#00a8ff] hover:border-[#00a8ff]/40 text-xs font-semibold py-2 h-9"
            >
              <span>View In-Depth Analysis</span>
              <ArrowRight className="h-3.5 w-3.5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </DialogTrigger>

          <DialogContent className="max-w-2xl bg-[#0E1334] border-[#D8ECF9]/20">
            <DialogHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className={`p-2.5 rounded-xl ${ind.bgColor} ${ind.color}`}>
                  <ind.icon className="h-6 w-6" />
                </div>
                <DialogTitle className="text-2xl">{ind.title} Risk Analysis</DialogTitle>
              </div>
              <DialogDescription>
                Detailed space weather physical interactions and operational risk mitigation
                parameters.
              </DialogDescription>
            </DialogHeader>

            <ScrollArea className="max-h-[60vh] pr-2">
              <div className="space-y-6 py-2">
                {/* System Interaction */}
                <div className="space-y-2">
                  <h4 className="text-xs font-mono font-bold text-[#00a8ff] uppercase tracking-wider flex items-center gap-2">
                    <Activity className="h-3.5 w-3.5" /> Physical System Interaction
                  </h4>
                  <p className="text-[#D8ECF9]/80 leading-relaxed text-xs sm:text-sm font-light">
                    {ind.details.interaction}
                  </p>
                </div>

                <Separator className="bg-white/10" />

                {/* Monitored Parameters */}
                <div className="space-y-2">
                  <h4 className="text-xs font-mono font-bold text-[#00a8ff] uppercase tracking-wider flex items-center gap-2">
                    <Database className="h-3.5 w-3.5" /> Primary Monitored Parameters
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {ind.details.parameters.map((param, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-xs text-white/90 bg-white/5 p-2.5 rounded-xl border border-white/5"
                      >
                        <div className="h-1.5 w-1.5 rounded-full bg-[#00a8ff] shrink-0" />
                        <span>{param}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Separator className="bg-white/10" />

                {/* Presentation */}
                <div className="space-y-2">
                  <h4 className="text-xs font-mono font-bold text-[#00a8ff] uppercase tracking-wider flex items-center gap-2">
                    <BarChart3 className="h-3.5 w-3.5" /> Data Presentation Strategy
                  </h4>
                  <p className="text-[#D8ECF9]/80 leading-relaxed text-xs sm:text-sm font-light">
                    {ind.details.presentation}
                  </p>
                </div>

                <Separator className="bg-white/10" />

                {/* Scope & Limitations */}
                <div className="space-y-2">
                  <h4 className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider flex items-center gap-2">
                    <Info className="h-3.5 w-3.5" /> Scope & Engineering Boundaries
                  </h4>
                  <div className="bg-amber-500/10 border border-amber-500/25 rounded-xl p-3.5">
                    <p className="text-xs text-amber-200/90 leading-relaxed font-light">
                      {ind.details.scope}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollArea>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
}
