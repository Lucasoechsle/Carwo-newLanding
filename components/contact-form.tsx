"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: "Formulario enviado",
      description: "Nos pondremos en contacto contigo pronto.",
    })

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    })

    setIsSubmitting(false)
  }

  return (
    <section id="contacto" className="w-full py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Contacto</h2>
          <div className="w-20 h-1 bg-black mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            ¿Tiene alguna pregunta o necesita asesoramiento? No dude en contactarnos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Envíenos un mensaje</CardTitle>
                <CardDescription>
                  Complete el formulario y nos pondremos en contacto con usted lo antes posible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nombre completo</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Su nombre"
                        required
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Correo electrónico</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="ejemplo@correo.com"
                        required
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Teléfono</Label>
                    <Input
                      id="phone"
                      name="phone"
                      placeholder="Su número de teléfono"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensaje</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="¿En qué podemos ayudarle?"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-black text-white hover:bg-white hover:text-black border border-black"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle>Información de Contacto</CardTitle>
                <CardDescription>Otras formas de ponerse en contacto con nosotros.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="h-5 w-5 mt-1 text-black" />
                  <div>
                    <h3 className="font-medium">Correo Electrónico</h3>
                    <p className="text-muted-foreground">info@carwo.com</p>
                    <p className="text-muted-foreground">ventas@carwo.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="h-5 w-5 mt-1 text-black" />
                  <div>
                    <h3 className="font-medium">Teléfono</h3>
                    <p className="text-muted-foreground">+123 456 7890</p>
                    <p className="text-muted-foreground">+123 456 7891</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 mt-1 text-black" />
                  <div>
                    <h3 className="font-medium">Dirección</h3>
                    <p className="text-muted-foreground">
                      Av. Principal 123
                      <br />
                      Ciudad, CP 12345
                      <br />
                      País
                    </p>
                  </div>
                </div>

                <div className="pt-4">
                  <h3 className="font-medium mb-2">Horario de Atención</h3>
                  <p className="text-muted-foreground">Lunes a Viernes: 9:00 - 18:00</p>
                  <p className="text-muted-foreground">Sábados: 9:00 - 13:00</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

