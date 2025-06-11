"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import * as Tooltip from "@radix-ui/react-tooltip";

import { cn } from "@/lib/utils";

function Slider({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  ...props
}: React.ComponentProps<typeof SliderPrimitive.Root>) {
  const _values = React.useMemo(
    () =>
      Array.isArray(value)
        ? value
        : Array.isArray(defaultValue)
        ? defaultValue
        : [min, max],
    [value, defaultValue, min, max]
  );

  // 드래그 상태 관리 배열 (Thumb이 여러 개일 수 있으므로)
  const [isDragging, setIsDragging] = React.useState<boolean[]>(
    Array(_values.length).fill(false)
  );

  const handleDragStart = (index: number) => {
    setIsDragging((prev) => {
      const newDragging = [...prev];
      newDragging[index] = true;
      return newDragging;
    });
  };

  const handleDragEnd = (index: number) => {
    setIsDragging((prev) => {
      const newDragging = [...prev];
      newDragging[index] = false;
      return newDragging;
    });
  };

  return (
    <SliderPrimitive.Root
      data-slot="slider"
      defaultValue={defaultValue}
      value={value}
      min={min}
      max={max}
      className={cn(
        "relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",
        className
      )}
      {...props}
    >
      <SliderPrimitive.Track
        data-slot="slider-track"
        className={cn(
          "bg-muted relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5"
        )}
      >
        <SliderPrimitive.Range
          data-slot="slider-range"
          className={cn(
            "bg-primary absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full"
          )}
        />
      </SliderPrimitive.Track>
      {Array.from({ length: _values.length }, (_, index) => (
        <Tooltip.Provider key={index}>
          <Tooltip.Root open={isDragging[index]}>
            <Tooltip.Trigger asChild>
              <SliderPrimitive.Thumb
                data-slot="slider-thumb"
                className="border-primary bg-background ring-ring/50 block size-4 shrink-0 rounded-full border shadow-sm transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50"
                onPointerDown={() => handleDragStart(index)}
                onPointerUp={() => handleDragEnd(index)}
                onPointerLeave={() => handleDragEnd(index)}
              />
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Content
                side="top"
                align="center"
                className="bg-black text-white text-xs px-2 py-1 rounded"
              >
                {_values[index]}
                <Tooltip.Arrow className="fill-black" />
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>
        </Tooltip.Provider>
      ))}
    </SliderPrimitive.Root>
  );
}

export { Slider };
