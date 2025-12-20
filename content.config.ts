import { defineCollection, z } from '@nuxt/content'

const createEnum = (options: [string, ...string[]]) => z.enum(options)

const createBaseSchema = () => z.object({
  title: z.string().nonempty(),
  description: z.string().nonempty()
})

const createLinkSchema = () => z.object({
  label: z.string().nonempty(),
  to: z.string().nonempty(),
  icon: z.string().optional().editor({ input: 'icon' }),
  size: createEnum(['xs', 'sm', 'md', 'lg', 'xl']),
  trailing: z.boolean().optional(),
  target: createEnum(['_blank', '_self']),
  color: createEnum(['primary', 'secondary', 'neutral', 'error', 'warning', 'success', 'info']),
  variant: createEnum(['solid', 'outline', 'subtle', 'soft', 'ghost', 'link'])
})

const createFeatureSchema = () => createBaseSchema().extend({
  icon: z.string().editor({ input: 'icon' }),
  ui: z.object({
    leading: z.string().optional()
  }).editor({ hidden: true })
})

export const collections = {
  content: defineCollection({
    source: 'index.yml',
    type: 'page',
    schema: z.object({
      hero: z.object({
        links: z.array(createLinkSchema())
      }),
      about: createBaseSchema().extend({
        headline: z.string().optional(),
        image: z.string().optional(),
        sections: z.array(
          createBaseSchema().extend({
            icon: z.string().editor({ input: 'icon' })
          })
        )
      }),
      support: createBaseSchema().extend({
        sections: z.array(
          createBaseSchema().extend({
            icon: z.string().optional().editor({ input: 'icon' }),

            // section may contain either description OR points[]
            description: z.string().optional(),
            points: z.array(z.string()).optional()
          })
        ),

        // removed plans completely
        buttons: z.array(
          z.object({
            label: z.string().nonempty(),
            to: z.string().url(),
            variant: z.string().optional()
          })
        )
      }),
      achievements: createBaseSchema().extend({
        items: z.array(createFeatureSchema().extend({
          image: z.object({
            light: z.string().editor({ input: 'media' }),
            dark: z.string().editor({ input: 'media' })
          }).optional()
        }))
      }),
      testimonials: createBaseSchema().extend({
        items: z.array(
          z.object({
            quote: z.string().nonempty(),
            user: z.object({
              name: z.string().nonempty(),
              description: z.string().nonempty(),
              to: z.string().nonempty(),
              avatar: z.object({
                src: z.string().editor({ input: 'media' }),
                alt: z.string().optional()
              }),
              target: createEnum(['_blank', '_self'])
            })
          }))
      }),
      cta: createBaseSchema().extend({
        links: z.array(createLinkSchema())
      })
    })
  }),
  about: defineCollection({
    type: 'page',
    source: 'about.yml',
    schema: z.object({
      content: z.object({})
    })
  }),
  global_recognition: defineCollection({
    type: 'page',
    source: 'global-recognition.yml',
    schema: z.object({
      content: z.array(
        z.object({
          title: z.string().nonempty(),
          description: z.string().nonempty(),
          image: z.string().nonempty().editor({ input: 'media' }),
          url: z.string().nonempty(),
          tags: z.array(z.string()),
        })
      )
    })
  }),
  journey_timeline: defineCollection({
    type: 'page',
    source: 'journey-timeline.yml',
    schema: z.object({
      content: z.array(
        z.object({
          country: z.string().nonempty(),
          date: z.string().nonempty(),
          kilometers : z.string().nonempty(),
          days: z.string().nonempty(),
        })
      )
    })
  })
}
