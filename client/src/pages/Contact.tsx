import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock, Send, Loader2, Building2 } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";
import heroLogo from "@assets/hero-logo_1764879253961.png";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
  productType: z.string().optional(),
  quantity: z.string().optional(),
  city: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const productTypes = [
  { value: "500ml", label: "500 ml Bottles" },
  { value: "1l", label: "1 Litre Bottles" },
  { value: "2l", label: "2 Litre Bottles" },
  { value: "20l", label: "20 Litre Jars" },
  { value: "mixed", label: "Mixed Order" },
];

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      productType: "",
      quantity: "",
      city: "",
      message: "",
    },
  });

  const submitEnquiry = useMutation({
    mutationFn: async (data: ContactFormValues) => {
      return apiRequest("POST", "/api/enquiries", data);
    },
    onSuccess: () => {
      setIsSubmitted(true);
      form.reset();
      toast({
        title: "Enquiry Submitted",
        description: "Thank you for your enquiry. We will contact you soon!",
      });
    },
    onError: () => {
      toast({
        title: "Submission Failed",
        description: "Please try again later or contact us directly.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    submitEnquiry.mutate(data);
  };

  return (
    <div className="min-h-screen" data-testid="page-contact">
      <Header />
      <main>
        <section className="relative pt-32 pb-20 bg-gradient-to-b from-secondary to-secondary/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <img
                src={heroLogo}
                alt="Mum Water Logo"
                className="h-20 w-auto mx-auto mb-6 brightness-0 invert"
              />
              <h1
                className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
                data-testid="text-contact-page-title"
              >
                Contact Us
              </h1>
              <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
                Get in touch for bulk orders, partnerships, or any questions
                about our products and services
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Card className="bg-card border-card-border" data-testid="card-contact-form-page">
                  <CardContent className="p-6 md:p-8">
                    <h2 className="font-serif text-2xl font-semibold text-foreground mb-6">
                      Send Us a Message
                    </h2>
                    {isSubmitted ? (
                      <div className="text-center py-12">
                        <div className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-6">
                          <Send className="h-10 w-10 text-green-600 dark:text-green-400" />
                        </div>
                        <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">
                          Thank You!
                        </h3>
                        <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                          Your enquiry has been submitted successfully. Our team will
                          review your request and contact you within 24 hours.
                        </p>
                        <Button
                          variant="outline"
                          onClick={() => setIsSubmitted(false)}
                          data-testid="button-new-enquiry-page"
                        >
                          Submit Another Enquiry
                        </Button>
                      </div>
                    ) : (
                      <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <FormField
                              control={form.control}
                              name="name"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Full Name *</FormLabel>
                                  <FormControl>
                                    <Input
                                      placeholder="Your name"
                                      {...field}
                                      data-testid="input-name-page"
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name="phone"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Phone Number *</FormLabel>
                                  <FormControl>
                                    <Input
                                      placeholder="+91 98765 43210"
                                      {...field}
                                      data-testid="input-phone-page"
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>

                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Email Address *</FormLabel>
                                <FormControl>
                                  <Input
                                    type="email"
                                    placeholder="your@email.com"
                                    {...field}
                                    data-testid="input-email-page"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                            <FormField
                              control={form.control}
                              name="productType"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Product Type</FormLabel>
                                  <Select
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                  >
                                    <FormControl>
                                      <SelectTrigger data-testid="select-product-type-page">
                                        <SelectValue placeholder="Select size" />
                                      </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                      {productTypes.map((type) => (
                                        <SelectItem key={type.value} value={type.value}>
                                          {type.label}
                                        </SelectItem>
                                      ))}
                                    </SelectContent>
                                  </Select>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name="quantity"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Quantity</FormLabel>
                                  <FormControl>
                                    <Input
                                      placeholder="e.g., 100 bottles"
                                      {...field}
                                      data-testid="input-quantity-page"
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name="city"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>City</FormLabel>
                                  <FormControl>
                                    <Input
                                      placeholder="Your city"
                                      {...field}
                                      data-testid="input-city-page"
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>

                          <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Message *</FormLabel>
                                <FormControl>
                                  <Textarea
                                    placeholder="Tell us about your requirements, preferred delivery schedule, or any other details..."
                                    className="min-h-[150px] resize-none"
                                    {...field}
                                    data-testid="textarea-message-page"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <Button
                            type="submit"
                            size="lg"
                            className="w-full md:w-auto"
                            disabled={submitEnquiry.isPending}
                            data-testid="button-submit-enquiry-page"
                          >
                            {submitEnquiry.isPending ? (
                              <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Submitting...
                              </>
                            ) : (
                              <>
                                <Send className="mr-2 h-4 w-4" />
                                Submit Enquiry
                              </>
                            )}
                          </Button>
                        </form>
                      </Form>
                    )}
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card className="bg-card border-card-border" data-testid="card-contact-info-page">
                  <CardContent className="p-6">
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-6">
                      Contact Information
                    </h3>
                    <div className="space-y-5">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Building2 className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground mb-1">Office</h4>
                          <p className="text-muted-foreground text-sm">
                            Mum Water,<br />
                            India
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Phone className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground mb-1">Phone</h4>
                          <a
                            href="tel:+919876543210"
                            className="text-muted-foreground text-sm hover:text-primary transition-colors"
                          >
                            +91 98765 43210
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Mail className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground mb-1">Email</h4>
                          <a
                            href="mailto:wecare@mumdrinks.com"
                            className="text-muted-foreground text-sm hover:text-primary transition-colors"
                          >
                            wecare@mumdrinks.com
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Clock className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground mb-1">Business Hours</h4>
                          <p className="text-muted-foreground text-sm">
                            Monday - Saturday: 8:00 AM - 8:00 PM<br />
                            Sunday: Closed
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-muted/30">
          <div className="h-96 bg-muted flex items-center justify-center" data-testid="map-container">
            <div className="text-center p-6">
              <MapPin className="h-16 w-16 text-muted-foreground/50 mx-auto mb-4" />
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                Find Us on the Map
              </h3>
              <p className="text-muted-foreground mb-4">
                Google Map will be displayed here
              </p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
