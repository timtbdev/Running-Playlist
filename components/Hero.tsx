"use client";

import RunningManIcon from "@/icons/running-man-icon";
import { LinkIcon } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

// URL validation schema
const urlSchema = z.object({
  url: z
    .string()
    .min(1, "URL is required")
    .url("Please enter a valid URL")
    .refine(
      (url) => {
        try {
          const urlObj = new URL(url);
          return urlObj.hostname.includes("spotify.com");
        } catch {
          return false;
        }
      },
      {
        message: "Please enter a valid Spotify URL",
      }
    ),
});

type UrlFormData = z.infer<typeof urlSchema>;

// App Logo Component
const AppLogo = () => (
  <div className="relative mx-auto flex size-16 items-center justify-center">
    <div className="absolute inset-x-0 top-1/2 h-[140%] -translate-y-1/2 border-x border-neutral-200 [mask-image:linear-gradient(transparent,black_20%,black_80%,transparent)]" />
    <div className="absolute inset-y-0 left-1/2 w-[140%] -translate-x-1/2 border-y border-neutral-200 [mask-image:linear-gradient(90deg,transparent,black_20%,black_80%,transparent)]" />
    <div className="absolute inset-0 drop-shadow-sm">
      <div className="absolute inset-0 rounded-xl border border-neutral-300 bg-white [mask-image:linear-gradient(#0007,black)]" />
    </div>
    <RunningManIcon className="relative size-14" />
  </div>
);

// Form Component
const PlaylistLinkForm = ({ onSubmit, isLoading = false }: {
  onSubmit: (data: UrlFormData) => void;
  isLoading?: boolean;
}) => {
  const form = useForm<UrlFormData>({
    resolver: zodResolver(urlSchema),
    defaultValues: { url: "" },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <div className="relative flex flex-col items-start overflow-hidden rounded-xl border border-neutral-200 bg-white px-2 pb-2 drop-shadow-md transition-all focus-within:ring ring-black/30 focus-within:border-neutral-800 focus-within:ring-black/30 sm:flex-row sm:items-center sm:pb-0 sm:pl-4 sm:pr-3">
          <FormField
            control={form.control}
            name="url"
            render={({ field }) => (
              <FormItem className="flex w-full grow items-center sm:w-auto">
                <div className="flex w-full grow items-center sm:w-auto">
                  <span className="sr-only">Spotify Playlist URL</span>
                  <LinkIcon className="size-5 shrink-0 text-neutral-800 [&_*]:stroke-1" />
                  <FormControl>
                    <Input
                      {...field}
                      type="url"
                      placeholder="https://open.spotify.com/playlist/28OAQven2H4fLmFsNEeVcY"
                      autoComplete="off"
                      disabled={isLoading}
                      className="relative block h-12 w-full rounded-r-xl border-0 px-2 text-base placeholder:text-neutral-400 focus:border-0 focus:border-neutral-800 focus:outline-none focus:ring-0 focus:ring-neutral-800 sm:h-14 sm:px-3"
                    />
                  </FormControl>
                </div>
                <FormMessage className="absolute -bottom-6 left-0 text-xs" />
              </FormItem>
            )}
          />
          <div className="flex w-full shrink-0 items-center justify-center pt-1 sm:w-auto sm:pl-1 sm:pt-0">
            <Button
              type="submit"
              disabled={isLoading || !form.watch("url").trim()}
              className="group flex h-8 w-full items-center justify-center gap-1.5 rounded-lg px-3 font-sans text-sm font-medium text-white sm:w-auto transition-[background-color,box-shadow] focus:outline-none focus:ring bg-black ring-black/30 hover:ring focus:ring-black/40 active:bg-neutral-800 disabled:bg-neutral-400 disabled:cursor-not-allowed"
            >
              {isLoading ? "Submitting..." : "Submit"}
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
};

// Main Hero Component
const Hero = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmitPlaylistLink = (data: UrlFormData) => {
    setIsLoading(true);
    // TODO: Implement playlist processing logic
    console.log("Processing playlist:", data.url);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className="grid-section relative overflow-clip border-grid-border [.grid-section_~_&]:border-t-0 border-b">
      <div className="relative z-0 mx-auto max-w-grid-width border-grid-border py-10">
        <div className="pointer-events-none absolute inset-0 border-x border-grid-border [mask-image:linear-gradient(transparent,black)]" />

        <div className="relative mx-auto flex max-w-md flex-col text-center sm:max-w-lg">
          <AppLogo />
          <h1 className="mt-4 text-center font-display text-4xl font-medium text-neutral-900 sm:text-5xl sm:leading-[1.15]">
            Running
            Playlist
          </h1>
          <p className="mt-2 text-base text-neutral-500 sm:text-lg">
            Find and share your favorite running playlists.
          </p>
        </div>

        <div className="mx-auto w-full max-w-[561.5px] rounded-xl bg-black/[0.02] p-3 relative mt-10 sm:bg-black/[0.03]">
          <PlaylistLinkForm onSubmit={handleSubmitPlaylistLink} isLoading={isLoading} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
