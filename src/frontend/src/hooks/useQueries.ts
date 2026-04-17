import { useActor } from "@caffeineai/core-infrastructure";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createActor } from "../backend";
import type {
  ConsultationBookingInput,
  ContactFormInput,
  ITAuditRequestInput,
} from "../backend.d";

function useBackendActor() {
  return useActor(createActor);
}

export function useContactSubmissions() {
  const { actor, isFetching } = useBackendActor();
  return useQuery({
    queryKey: ["contactSubmissions"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getContactSubmissions();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useConsultationBookings() {
  const { actor, isFetching } = useBackendActor();
  return useQuery({
    queryKey: ["consultationBookings"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getConsultationBookings();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useITAuditRequests() {
  const { actor, isFetching } = useBackendActor();
  return useQuery({
    queryKey: ["itAuditRequests"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getITAuditRequests();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useSubmitContactForm() {
  const { actor } = useBackendActor();
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (input: ContactFormInput) => {
      if (!actor) throw new Error("Actor not available");
      return actor.submitContactForm(input);
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["contactSubmissions"] }),
  });
}

export function useSubmitConsultationBooking() {
  const { actor } = useBackendActor();
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (input: ConsultationBookingInput) => {
      if (!actor) throw new Error("Actor not available");
      return actor.submitConsultationBooking(input);
    },
    onSuccess: () =>
      qc.invalidateQueries({ queryKey: ["consultationBookings"] }),
  });
}

export function useSubmitITAuditRequest() {
  const { actor } = useBackendActor();
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (input: ITAuditRequestInput) => {
      if (!actor) throw new Error("Actor not available");
      return actor.submitITAuditRequest(input);
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["itAuditRequests"] }),
  });
}
