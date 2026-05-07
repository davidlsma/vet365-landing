export interface Servicio {
  id: string;
  nombre: string;
  descripcion: string;
  icono: string;
}

export const servicios: Servicio[] = [
  {
    id: 'consulta',
    nombre: 'Consulta General',
    descripcion: 'Diagnóstico y atención médica completa para tu mascota con profesionales especializados.',
    icono: '🩺',
  },
  {
    id: 'vacunacion',
    nombre: 'Vacunación',
    descripcion: 'Plan de vacunación completo y personalizado para proteger la salud de tu mascota.',
    icono: '💉',
  },
  {
    id: 'cirugia',
    nombre: 'Cirugía Veterinaria',
    descripcion: 'Procedimientos quirúrgicos con equipamiento moderno y anestesia segura.',
    icono: '🏥',
  },
  {
    id: 'castracion',
    nombre: 'Esterilización',
    descripcion: 'Esterilización y castración con cuidados pre y postoperatorios incluidos.',
    icono: '❤️',
  },
  {
    id: 'urgencias',
    nombre: 'Urgencias 24hs',
    descripcion: 'Atención de emergencias veterinarias disponible los 365 días del año.',
    icono: '🚑',
  },
  {
    id: 'radiografia',
    nombre: 'Radiografías',
    descripcion: 'Estudios por imagen para un diagnóstico preciso y rápido.',
    icono: '🔬',
  },
  {
    id: 'laboratorio',
    nombre: 'Análisis Clínicos',
    descripcion: 'Laboratorio interno para análisis de sangre, orina y otros estudios.',
    icono: '🧪',
  },
  {
    id: 'odontologia',
    nombre: 'Odontología',
    descripcion: 'Salud dental: limpieza, extracciones y tratamientos odontológicos veterinarios.',
    icono: '🦷',
  },
  {
    id: 'dermatologia',
    nombre: 'Dermatología',
    descripcion: 'Diagnóstico y tratamiento de enfermedades de la piel, pelo y uñas.',
    icono: '🐾',
  },
  {
    id: 'nutricion',
    nombre: 'Nutrición Animal',
    descripcion: 'Planes nutricionales personalizados para cada etapa de vida de tu mascota.',
    icono: '🥩',
  },
  {
    id: 'internacion',
    nombre: 'Hospitalización',
    descripcion: 'Internación y cuidados intensivos con monitoreo permanente las 24 horas.',
    icono: '🏨',
  },
  {
    id: 'petshop',
    nombre: 'Pet Shop',
    descripcion: 'Alimentos, accesorios, juguetes y productos de higiene para el bienestar de tu mascota.',
    icono: '🛍️',
  },
];
