export interface Treatment {
    slug: string;
    title: string;
    shortDescription: string;
    description: string;
    image: string;
    benefits: {
        title: string;
        description: string;
    }[];
    metadata: {
        title: string;
        keywords: string;
        description: string;
    }[];
}

export const treatments: Treatment[] = [
    {
        slug: "panchakarma-therapy",
        title: "Panchakarma Therapy",
        shortDescription: "Detox through Vamana, Virechana, Vasti and more.",
        description: `Panchakarma is a powerful Ayurvedic detoxification and rejuvenation therapy that includes five main procedures — Vamana, Virechana, Basti, Nasya, and Raktamokshana — each targeting different bodily systems. These therapies eliminate toxins, balance doshas, and restore vitality and wellness.`,
        image: "/TreatmentsImages/panchakarma.jpg",
        benefits: [
            { title: "Deep Detoxification", description: "Removes accumulated toxins from the body." },
            { title: "Boosts Immunity", description: "Enhances body resistance and immune strength." },
            { title: "Balances Doshas", description: "Restores natural balance of Vata, Pitta, and Kapha." },
            { title: "Improves Digestion", description: "Enhances metabolic function and nutrient absorption." },
            { title: "Mental Clarity", description: "Clears brain fog and improves focus." },
            { title: "Anti-Aging", description: "Delays signs of aging and boosts vitality." },
        ],
        metadata: [
            {
                title: "Panchakarma Treatment in Hyderabad | Detox & Rejuvenation | Edvenswa Ayurveda",
                keywords: "panchakarma treatment hyderabad, vamana therapy hyderabad, virechana treatment hyderabad, basti therapy hyderabad, nasya treatment hyderabad, ayurvedic detox hyderabad, dosha balancing treatment, rejuvenation therapy hyderabad",
                description: "Authentic Panchakarma treatment in Hyderabad including Vamana, Virechana, Basti therapies. Complete detoxification, dosha balancing & rejuvenation by experienced Ayurvedic specialists."
            }
        ]
    },
    {
        slug: "abhyangam",
        title: "Abhyangam",
        shortDescription: "Warm herbal oil massage for body and mind.",
        description: `Abhyangam is a full-body massage using warm medicated oils tailored to your dosha type. It improves blood circulation, reduces stress, nourishes skin, promotes relaxation, and supports lymphatic drainage.`,
        image: "/TreatmentsImages/Abhyangam.webp",
        benefits: [
            { title: "Improves Circulation", description: "Enhances blood flow and oxygen delivery throughout the body." },
            { title: "Reduces Stress", description: "Relaxes the nervous system and reduces anxiety." },
            { title: "Detoxifies Body", description: "Promotes lymphatic drainage and toxin elimination." },
            { title: "Boosts Immunity", description: "Strengthens body resilience and defense mechanisms." },
            { title: "Balances Doshas", description: "Restores harmony of Vata, Pitta, and Kapha." },
            { title: "Skin Nourishment", description: "Leaves skin soft, supple, and glowing." },
        ],
        metadata: [
            {
                title: "Abhyangam Massage in Hyderabad | Full Body Oil Massage | Edvenswa Ayurveda",
                keywords: "abhyangam massage hyderabad, ayurvedic oil massage hyderabad, full body massage ayurveda, medicated oil massage hyderabad, stress relief massage hyderabad, therapeutic massage ayurveda, lymphatic drainage massage",
                description: "Traditional Abhyangam full-body oil massage in Hyderabad. Medicated oils, stress relief, improved circulation & lymphatic drainage. Expert Ayurvedic massage therapy for holistic wellness."
            }
        ]
    },
    {
        slug: "shirodhara",
        title: "Shirodhara",
        shortDescription: "Stream of warm oil to soothe the mind.",
        description: `Shirodhara involves gently pouring warm medicated oil over the forehead in a continuous stream. This therapy promotes mental clarity, deep relaxation, better sleep, and is highly effective for stress, anxiety, and migraines.`,
        image: "/TreatmentsImages/Shirodhara.webp",
        benefits: [
            { title: "Relieves Stress", description: "Calms the nervous system and reduces anxiety." },
            { title: "Improves Sleep", description: "Helps in overcoming insomnia and disturbed sleep." },
            { title: "Soothes Headaches", description: "Effective for migraines and tension headaches." },
            { title: "Enhances Focus", description: "Promotes mental clarity and emotional balance." },
            { title: "Balances Hormones", description: "Regulates endocrine function and hormones." },
            { title: "Cools the Body", description: "Reduces body heat and pitta dosha." },
        ],
        metadata: [
            {
                title: "Shirodhara Treatment in Hyderabad | Oil Pouring Therapy | Edvenswa Ayurveda",
                keywords: "shirodhara treatment hyderabad, oil pouring therapy hyderabad, stress relief treatment ayurveda, migraine treatment ayurveda, insomnia treatment hyderabad, mental clarity therapy, anxiety treatment ayurveda, meditation therapy hyderabad",
                description: "Authentic Shirodhara treatment in Hyderabad. Continuous warm oil pouring therapy for stress relief, migraine treatment, better sleep & mental clarity. Expert Ayurvedic healing."
            }
        ]
    },
    {
        slug: "swedam",
        title: "Swedam",
        shortDescription: "Herbal steam therapy to release toxins.",
        description: `Swedana (steam therapy) opens up pores and removes toxins through sweat. It is usually done after Abhyangam to help oils penetrate deeply and alleviate stiffness, pain, and fatigue.`,
        image: "/TreatmentsImages/Swedam.webp",
        benefits: [
            { title: "Removes Toxins", description: "Eliminates impurities through sweating." },
            { title: "Relieves Pain", description: "Eases muscle and joint stiffness." },
            { title: "Improves Circulation", description: "Stimulates blood flow and oxygen delivery." },
            { title: "Promotes Relaxation", description: "Reduces fatigue and calms the mind." },
            { title: "Clears Skin", description: "Opens pores and improves skin health." },
            { title: "Enhances Oil Absorption", description: "Supports deeper herbal oil penetration." },
        ],
        metadata: [
            {
                title: "Swedana Steam Therapy in Hyderabad | Ayurvedic Detox | Edvenswa Ayurveda",
                keywords: "swedana therapy hyderabad, ayurvedic steam therapy hyderabad, herbal steam treatment, detox therapy hyderabad, toxin removal treatment, pain relief therapy ayurveda, muscle stiffness treatment, circulation improvement therapy",
                description: "Traditional Swedana steam therapy in Hyderabad. Herbal steam treatment for detoxification, pain relief, improved circulation & toxin elimination. Expert Ayurvedic healing therapy."
            }
        ]
    },
    {
        slug: "kati-vasti",
        title: "Kati Vasti",
        shortDescription: "Warm medicated oil for lower back relief.",
        description: `Kati Vasti involves placing warm medicated oil over the lower back inside a dough ring. It is highly beneficial for treating lumbar spondylosis, herniated discs, sciatica, and chronic lower back pain.`,
        image: "/TreatmentsImages/KatiVasti.webp",
        benefits: [
            { title: "Relieves Lower Back Pain", description: "Soothes chronic pain and discomfort." },
            { title: "Treats Sciatica", description: "Eases nerve-related lower back pain." },
            { title: "Lubricates Spine", description: "Improves joint flexibility and mobility." },
            { title: "Reduces Inflammation", description: "Soothes inflamed muscles and tissues." },
            { title: "Strengthens Back", description: "Supports spinal structure and endurance." },
        ],
        metadata: [
            {
                title: "Kati Vasti Treatment in Hyderabad | Lower Back Pain Relief | Edvenswa Ayurveda",
                keywords: "kati vasti treatment hyderabad, lower back pain treatment ayurveda, sciatica treatment hyderabad, lumbar spondylosis treatment, herniated disc treatment ayurveda, chronic back pain relief, spine treatment ayurveda",
                description: "Specialized Kati Vasti treatment in Hyderabad for lower back pain, sciatica, lumbar spondylosis & herniated disc. Medicated oil therapy for chronic spine conditions."
            }
        ]
    },
    {
        slug: "janu-vasti",
        title: "Janu Vasti",
        shortDescription: "Therapy to treat knee pain and arthritis.",
        description: `In Janu Vasti, warm herbal oil is pooled over the knee joints inside a herbal dough ring. It improves joint lubrication, strengthens cartilage, and helps with arthritis and injuries.`,
        image: "/TreatmentsImages/JanuVasti.webp",
        benefits: [
            { title: "Reduces Knee Pain", description: "Relieves arthritis and age-related pain." },
            { title: "Strengthens Joints", description: "Improves cartilage and bone strength." },
            { title: "Improves Flexibility", description: "Restores natural range of motion." },
            { title: "Lubricates Joints", description: "Promotes smooth movement and comfort." },
            { title: "Soothes Inflammation", description: "Reduces swelling in the knee joint." },
            { title: "Enhances Circulation", description: "Boosts blood flow to aid tissue healing." }
        ],
        metadata: [
            {
                title: "Janu Vasti Treatment in Hyderabad | Knee Pain Relief | Edvenswa Ayurveda",
                keywords: "janu vasti treatment hyderabad, knee pain treatment ayurveda, arthritis treatment hyderabad, joint pain relief ayurveda, knee joint therapy, cartilage strengthening treatment, knee flexibility therapy, joint lubrication treatment",
                description: "Effective Janu Vasti treatment in Hyderabad for knee pain, arthritis & joint problems. Warm herbal oil therapy for improved joint lubrication, flexibility & cartilage health."
            }
        ]
    },
    {
        slug: "greeva-vasti",
        title: "Greeva Vasti",
        shortDescription: "Neck pain relief through oil retention therapy.",
        description: `Greeva Vasti is a cervical spine treatment where warm oil is held over the neck region. It reduces inflammation, improves flexibility, and treats cervical spondylitis and neck stiffness.`,
        image: "/TreatmentsImages/GreevaVasti.webp",
        benefits: [
            { title: "Treats Neck Stiffness", description: "Relieves tight muscles and spasms." },
            { title: "Improves Neck Mobility", description: "Restores free movement." },
            { title: "Reduces Cervical Pain", description: "Helps manage cervical spondylosis." },
            { title: "Strengthens Vertebrae", description: "Supports cervical spine health." },
            { title: "Soothes Nerve Compression", description: "Eases pinched nerves and radiating pain." },
            { title: "Enhances Blood Flow", description: "Boosts circulation to neck and shoulder areas." }
        ],
        metadata: [
            {
                title: "Greeva Vasti Treatment in Hyderabad | Neck Pain Relief | Edvenswa Ayurveda",
                keywords: "greeva vasti treatment hyderabad, neck pain treatment ayurveda, cervical spondylitis treatment, neck stiffness relief, cervical spine therapy, neck mobility treatment, nerve compression treatment, shoulder pain ayurveda",
                description: "Specialized Greeva Vasti treatment in Hyderabad for neck pain, cervical spondylitis & stiffness. Warm oil therapy for improved neck mobility & nerve compression relief."
            }
        ]
    },
    {
        slug: "mukha-lepa",
        title: "Mukha Lepa",
        shortDescription: "Ayurvedic facial for glow and acne reduction.",
        description: `Mukha Lepa is an herbal face pack treatment tailored to your skin type. It helps reduce pigmentation, acne, and dryness while enhancing your natural glow using natural ingredients.`,
        image: "/TreatmentsImages/MukhaLepa.webp",
        benefits: [
            { title: "Brightens Skin", description: "Improves complexion and glow." },
            { title: "Reduces Acne", description: "Cleanses pores and balances oil." },
            { title: "Heals Pigmentation", description: "Fades scars and uneven tones." },
            { title: "Nourishes Skin", description: "Provides deep hydration and softness." },
            { title: "Delays Ageing Signs", description: "Minimizes wrinkles and fine lines naturally." },
            { title: "Soothes Skin Irritations", description: "Calms inflammation and redness effectively." }
        ],
        metadata: [
            {
                title: "Mukha Lepa Facial Treatment in Hyderabad | Ayurvedic Skin Care | Edvenswa",
                keywords: "mukha lepa treatment hyderabad, ayurvedic facial hyderabad, herbal face pack treatment, acne treatment ayurveda, pigmentation treatment hyderabad, natural skin care hyderabad, anti-aging treatment ayurveda, glowing skin therapy",
                description: "Natural Mukha Lepa facial treatment in Hyderabad. Herbal face packs for acne, pigmentation, anti-aging & glowing skin. Personalized Ayurvedic skincare solutions."
            }
        ]
    },
    {
        slug: "netra-tarpanam",
        title: "Netra Tarpanam",
        shortDescription: "Ghee therapy to improve eye health.",
        description: `This treatment involves retaining medicated ghee over the eyes using a ring made of dough. It nourishes the optic nerves, reduces strain, dryness, and improves vision.`,
        image: "/TreatmentsImages/NetraTarpanam.webp",
        benefits: [
            { title: "Improves Vision", description: "Strengthens eyesight and eye muscles." },
            { title: "Reduces Strain", description: "Relieves dryness and fatigue." },
            { title: "Nourishes Optic Nerves", description: "Supports long-term eye health." },
            { title: "Soothes Inflammation", description: "Cools and refreshes tired eyes." },
        ],
        metadata: [
            {
                title: "Netra Tarpanam Eye Treatment in Hyderabad | Vision Improvement | Edvenswa",
                keywords: "netra tarpanam treatment hyderabad, eye treatment ayurveda, vision improvement therapy, dry eyes treatment ayurveda, eye strain relief, optic nerve strengthening, eye health ayurveda, ghee therapy eyes",
                description: "Traditional Netra Tarpanam eye treatment in Hyderabad. Medicated ghee therapy for vision improvement, dry eyes, eye strain relief & overall eye health enhancement."
            }
        ]
    },
    {
        slug: "wellness-retreats",
        title: "Wellness Retreats",
        shortDescription: "Holistic detox and rejuvenation programs.",
        description: `Our personalized wellness retreats offer body and mind rejuvenation using Panchakarma, yoga, meditation, and diet. Ideal for stress relief, lifestyle reset, and overall wellness.`,
        image: "/TreatmentsImages/WellnessRetreats.webp",
        benefits: [
            { title: "Total Rejuvenation", description: "Revives body, mind, and spirit." },
            { title: "Stress Management", description: "Improves resilience and relaxation." },
            { title: "Personalized Healing", description: "Tailored therapies for each individual." },
            { title: "Long-Term Wellness", description: "Promotes lasting lifestyle balance." },
        ],
        metadata: [
            {
                title: "Ayurvedic Wellness Retreats in Hyderabad | Detox Programs | Edvenswa",
                keywords: "ayurvedic wellness retreat hyderabad, detox retreat hyderabad, rejuvenation program ayurveda, stress management retreat, holistic healing program, lifestyle reset therapy, mind body wellness retreat, personalized healing program",
                description: "Comprehensive Ayurvedic wellness retreats in Hyderabad. Personalized detox, rejuvenation & stress management programs combining Panchakarma, yoga, meditation & diet."
            }
        ]
    },
    {
        slug: "nasyakarma",
        title: "Nasyakarma",
        shortDescription: "Nasal detox for sinus and brain clarity.",
        description: `Nasyam involves instilling medicated oil into the nostrils to cleanse sinuses, improve oxygen flow, relieve allergies, migraines, and improve mental clarity.`,
        image: "/TreatmentsImages/Nasyakarma.webp",
        benefits: [
            { title: "Clears Sinuses", description: "Removes congestion and mucus." },
            { title: "Relieves Headaches", description: "Reduces migraines and facial pain." },
            { title: "Improves Breathing", description: "Enhances nasal and brain oxygen flow." },
            { title: "Boosts Mental Clarity", description: "Sharpens memory and cognition." },
        ],
        metadata: [
            {
                title: "Nasyakarma Nasal Therapy in Hyderabad | Sinus Treatment | Edvenswa Ayurveda",
                keywords: "nasyakarma treatment hyderabad, nasal therapy ayurveda, sinus treatment ayurveda, migraine treatment hyderabad, mental clarity therapy, breathing improvement treatment, allergy treatment ayurveda, congestion relief therapy",
                description: "Effective Nasyakarma nasal therapy in Hyderabad for sinus problems, migraines, allergies & mental clarity. Medicated oil nasal treatment for improved breathing & cognition."
            }
        ]
    },
    {
        slug: "udwartanam",
        title: "Udwartanam",
        shortDescription: "Dry herbal massage to reduce fat and detox.",
        description: `Udwartanam is a dry massage using herbal powders. It breaks down fat tissues, stimulates blood circulation, improves skin tone, and is ideal for obesity and cellulite.`,
        image: "/TreatmentsImages/Udwartanam.webp",
        benefits: [
            { title: "Reduces Fat", description: "Breaks down excess fat and cellulite." },
            { title: "Stimulates Metabolism", description: "Activates lymph and blood flow." },
            { title: "Detoxifies Skin", description: "Removes impurities and dead skin cells." },
            { title: "Improves Tone", description: "Firms skin and enhances texture." },
        ],
        metadata: [
            {
                title: "Udwartanam Dry Massage in Hyderabad | Weight Loss Therapy | Edvenswa Ayurveda",
                keywords: "udwartanam treatment hyderabad, dry massage ayurveda, weight loss treatment hyderabad, obesity treatment ayurveda, cellulite reduction therapy, fat burning massage, metabolism boost therapy, body toning treatment",
                description: "Traditional Udwartanam dry herbal massage in Hyderabad for weight loss, obesity, cellulite reduction & body toning. Herbal powder massage for fat breakdown & metabolism boost."
            }
        ]
    },
];